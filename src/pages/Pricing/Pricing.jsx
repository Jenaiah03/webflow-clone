import { useState } from 'react';
import SiteToggle from '../../Components/PricingComp/SiteToggle/SiteToggle';
import './Pricing.css';
import FrequentQuestion from '../../Components/PricingComp/FrequentQuestion/FrequentQuestion';
import Footer from '../../Components/EnterpriseComp/Footer/Footer';
import Navbar from '../../Components/EnterpriseComp/Navbar/Navbar';
import WorkSpaceToggle from '../../Components/PricingComp/WorkspaceToggle/WorkspaceToggle';


const generalData = [
        {
            id: 1,
            title: { tag: 'STARTER', amount: 'Free' },
            desc: 'Get started building, experimenting, and prototyping with AI.',
            publishing: ['Webflow.io domain', '2 pages', '20 CMS collections'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Start for free',
        },
        {
            id: 2,
            title: { tag: 'BASIC', amount: '$14/mo' },
            desc: 'For relatively simple, static sites.',
            publishing: ['Custom domain', '150 pages', '0 CMS collections'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        {
            id: 3,
            title: { tag: 'CMS', amount: '$23/mo' },
            badge: 'POPULAR',   
            desc: 'For blogs or other content-driven sites.',
            publishing: ['Custom domain', '150 pages', '20 CMS collections', '2,000 CMS items'],
            hosting: ['50 form submits', '1 GB bandwidth', 'Web app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        {
            id: 4,
            title: { tag: 'BUSINESS', amount: '$39/mo' },
            badge: 'FLEXIBLE',   
            desc: 'For larger sites that need more flexibility.',
            publishing: ['Custom domain', '300 pages', '40 CMS collections', '10,000 CMS items'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        {
            id: 5,
            title: { tag: 'ENTERPRISE', amount: 'Get a demo' },
            desc: 'For those who need a scalable custom solution.',
            publishing: ['Enterprise-ready scale', 'Advanced security', 'Custom support'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Talk to us',
        },
        ];

    const ecommerceData = [
        {
            id: 1,
            title: { tag: 'STARTER', amount: 'Free' },
            desc: 'Get started building, experimenting, and prototyping with AI.',
            publishing: ['webflow.io domain', '2 pages', '20 CMS collections'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Start for free',
        },
        {
            id: 2,
            title: { tag: 'BASIC', amount: '$14/mo' },
            desc: 'For relatively simple, static sites.',
            publishing: ['Custom domain', '150 pages', '0 CMS collections'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        {
            id: 3,
            title: { tag: 'CMS', amount: '$23/mo' },
            desc: 'For blogs or other content-driven sites.',
            publishing: ['Custom domain', '150 pages', '20 CMS collections', '2,000 CMS items'],
            hosting: ['50 form submits', '1 GB bandwidth', 'Web app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        ];

            const teamsData = [
        {
            id: 1,
            title: { tag: 'STARTER', amount: 'Free' },
            desc: 'Get started building, experimenting, and prototyping with AI.',
            publishing: ['Webflow.io domain', '2 pages', '20 CMS collections'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Start for free',
        },
        {
            id: 2,
            title: { tag: 'BASIC', amount: '$14/mo' },
            desc: 'For relatively simple, static sites.',
            publishing: ['Custom domain', '150 pages', '0 CMS collections'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        {
            id: 3,
            title: { tag: 'CMS', amount: '$23/mo' },
            desc: 'For blogs or other content-driven sites.',
            publishing: ['Custom domain', '150 pages', '20 CMS collections', '2,000 CMS items'],
            hosting: ['50 form submits', '1 GB bandwidth', 'Web app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        {
            id: 4,
            title: { tag: 'BUSINESS', amount: '$39/mo' },
            desc: 'For larger sites that need more flexibility.',
            publishing: ['Custom domain', '300 pages', '40 CMS collections', '10,000 CMS items'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        ];

    const freelancersData = [
        {
            id: 1,
            title: { tag: 'STARTER', amount: 'Free' },
            desc: 'Get started building, experimenting, and prototyping with AI.',
            publishing: ['Webflow.io domain', '2 pages', '20 CMS collections'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Start for free',
        },
        {
            id: 2,
            title: { tag: 'BASIC', amount: '$14/mo' },
            desc: 'For relatively simple, static sites.',
            publishing: ['Custom domain', '150 pages', '0 CMS collections'],
            hosting: ['50 form submits', '1 GB bandwidth', 'We app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        {
            id: 3,
            title: { tag: 'CMS', amount: '$23/mo' },
            desc: 'For blogs or other content-driven sites.',
            publishing: ['Custom domain', '150 pages', '20 CMS collections', '2,000 CMS items'],
            hosting: ['50 form submits', '1 GB bandwidth', 'Web app hosting', '10,000 CMS items'],
            cta: 'Add Site plan',
        },
        ];

        const plansData = [
            {
                id: 1,
                question: "What's the difference between a Workspace and a Site plan?",
                answer: [
                    "There are two main types of Webflow plans: Site plans and Workspace plans",
                    "Every site built in Webflow automatically lives inside of a Workspace.",
                    "When you sign up for Webflow, you get a free Workspace plan by default. A Workspace is a space where you stage sites — and where you can invite teammates and clients to work on sites together. Upgrading your Workspace plan gives you access to enhanced staging capabilities and advanced collaboration features.",
                    "Site plans give you the tools to build your site. When you sign up for Webflow, you automatically get a free Starter Site plan. When you need to publish, host, or unlock additional site-building features, you can upgrade that specific site to a paid Site plan."
                ]
            },
            {
                id: 2,
                question: "How many Workspaces can I have?",
                answer: ["Workspaces are designed to be a space for you to organize and build your sites, and invite people to build with you. You may have different needs for different Workspaces, so you can create as many as you need, but each Webflow customer is limited to one free Workspace."]
            },
            {
                id: 3,
                question: "How many paid Site plans can I have in my workspace?",
                answer: ["Any Workspace tier can support an unlimited number of paid Site plans. The main difference in site limits on Workspace tiers is the number of Starter sites each tier supports (Free = 2; Core = 10; Growth = Unlimited). As soon as you upgrade a Starter site to a paid Site plan, it no longer counts against your free Starter site limit."]
            },
            {
                id: 4,
                question: "Can I cancel my Site and/or Workspace at any time?",
                answer: ["Yes, but you’ll still pay the remainder of the term for the plan you signed up for."]
            },
        
        ]

        const capabilitiesData = [
            {
                id: 1,
                question: "What kind of support does Webflow offer?",
                answer: ["We provide customer support via email and aim to reply to all requests within 48 hours. You can also find guides and solutions in the Webflow Help Center, courses and tutorials on Webflow University, and a host of helpful Webflow customers in our Community Forum."]
            },
            {
                id: 2,
                question: "Can I host my website somewhere else?",
                answer: ["You can export your site and host it anywhere you like with any of our paid Workspace plans, no attribution required.‍Note: Dynamic content must be exported on a collection-by-collection basis and forms will stop working."]
            },
            {
                id: 3,
                question: "Can my clients or coworkers uplad their own content?",
                answer: ["On the CMS and Business Site plans, clients and collaborators can use the Editor to edit and publish new content anytime."]
            },
            {
                id: 4,
                question: "How much traffic can webflow hosting handle?",
                answer: ["Webflow hosting scales automatically to handle millions of simultaneous visits and uses Amazon's Cloudfront CDN and Fastly to load websites in milliseconds."]
            },
            {
                id: 5,
                question: "How does Webflow Cloud pricing work?",
                answer: ["Webflow Cloud pricing is a transparent, usage-based model billed based on the amount of data transferred, the number of requests made, and the duration of compute resources used. All paid site plans include complimentary Surge Protection and automatic upgrades if you exceed your limits.",
                    "1.Bandwidth. The amount of data transferred by your web app in a given month. These limits for hosted Webflow Cloud apps are pooled with your site bandwidth limits.",
                    "2.Requests. The number of requests your application handles in a given month.",
                    "3. CPU usage. The time your Webflow Cloud app code is actively executing in a given month."
                ]
            },
            {
                id: 6,
                question: "Can I import my website or my code?",
                answer: ["No, you can only develop websites in Webflow. If you export your code, it can’t be reimported."]
            },
            {
                id: 7,
                question: "Are Webflow websites SEO-friendly?",
                answer: ["Yes, Webflow sites are SEO-friendly. Our blazing-fast hosting, standards-based code, free SSL, and mobile-friendliness all help Webflow sites rank in search."]
            },
            {
                id: 8,
                question: "Does Webflow have an API?",
                answer: ["Webflow’s REST API allows you to add, update, and remove items from your CMS. Read the documentation."]
            },
                        {
                id: 9,
                question: "How much does a Webflow Certification Certification exam cost?",
                answer: ["The Webflow Practitioner Certification exam is $100 USD. In some countries and regions, additional taxes (such as VAT) may apply."]
            },
        ]

        




const Pricing = () => {
    const name = "Raphael";
    // console.log("Displaying the pricing name", name);
    // console.log(Displaying the pricing name, name);
    // String interpolation
    // console.log(Displaying the pricing name ${name});
    // Here, ${name} is replaced with "Raphael".

    // const isDarkMode = false;
    // const buttonClass = btn ${isDarkMode ? "btn-dark" : "btn-light"};

    // console.log(buttonClass);
    //buttonClass = btn btn-light

    // const name = "Mercy";
    // const [activeTab, setActiveTab] = useState("general");
    // const [activeSection, setActiveSection] = useState("site"); // "site" or "workspace"
    
    // const plans = activeTab === "general" ? generalData : ecommerceData;
    // const cols = activeTab === "general" ? "five-cols" : "three-cols";

    // const workspacePlans = activeTab === "general" ? teams : freelancers;
    // const workspaceCols = activeTab === "general" ? "five-cols" : "three-cols";


    // USING A VARIABLE TO DEMONSTRATE THE USE OF STRING INTERPOLATION
    // const currentPage = "home";

    // ACTUAL JAVASCRIPT CODE FOR THE PRICING PAGE
    const [activeSection, setActiveSection] = useState("site"); // "site" or "workspace"
    const [activeTab, setActiveTab] = useState("general"); // "general" or "ecommerce"

    // We need one section and one tab to display one dataset (plans)
    const plans = activeTab === "general" ? generalData : ecommerceData;
    const cols = activeTab === "general "? "five-cols" : "three-cols"

    const workspacePlans = activeTab === "teams" ? teamsData : freelancersData;
    const workspaceCols = activeTab === "teams"? "four-cols" : "three-cols"


   
  return (
    <div className='pricing-container'>
        <section className="pricing-section">

            <div className="navbar-system">
                <Navbar/>
            </div>

            {/* <div className={menu-item ${currentPage === "home" ? "active" : ""}}>
                Home
            </div> */}

            <div className="section-header">
                <h1 className="main-title">Get started with AI website experiences</h1>
            </div>

            <div className="sub-sections">
                <div 
                    className={`site-half ${activeSection === "site" ? "active-half" : ""}`} 
                    // className="site-half active-half"
                    onClick={() => setActiveSection("site")}
                >
                    <h4 className="size-half">Site Plans</h4>
                </div>
                <div 
                    className={`workspace-half ${activeSection === "workspace" ? "active-half" : ""}`} 
                    onClick={() => setActiveSection("workspace")}
                >
                    <h4 className="size-half">Workspace Plans</h4>
                </div>
            </div>

            <hr className="section-divider"/>



            {/* TERNARY OPERATOR */}
            {/* {condition ? option 1 : option 2} */}

            {activeSection === "site" ? (
                <>
                    <div className="site-plans-header">
                        <h2 className="site-title">Site Plans</h2>
                        <div className="toggle-buttons">
                            <button
                                onClick={() => setActiveTab("general")}
                                // plans = generalData
                                className='toggle-one'
                            >
                                General
                            </button>
                            <button
                                onClick={() => setActiveTab("ecommerce")}
                                // plans = ecommerceData
                                className='toggle-one'
                            >
                                E-commerce
                            </button>
                        </div>
                    </div>
                    <SiteToggle  plans={plans} cols={cols} />
                </>
            ) : (
                <>
                    <div className="workspace-plans-header">
                        <h2 className="site-title">Workspace Plans</h2>
                        <div className="toggle-buttons">
                            <button
                                onClick={() => setActiveTab("teams")}
                                className='toggle-one'
                            >
                            For Teams
                            </button>
                            <button
                                onClick={() => setActiveTab("freelancers")}
                                className='toggle-one'
                            >
                            For Freelancers & Agencies
                            </button>
                        </div>
                    </div>
                    <WorkSpaceToggle workspacePlans={workspacePlans} workspaceCols={workspaceCols}/>
                </>
            )}

            <>
                <div className='question-overall'>
                    <div className='faq-text'>
                    <h1 className='head-text'>Frequently Asked Question</h1>
                    <FrequentQuestion questions={plansData} caps={capabilitiesData} />

                    </div>
                    
                </div>


                
            </>





            {/* the left hand side of the equality sign of the call refers to the one in the SiteToggle.jsx */}

            {/* the right hand side of the equality sign of the call refers to the one in the Pricing.jsx */}

            



        
            
        </section>
            

        <div className="footer-Control">
            <Footer/>
        </div>
    </div>
  )
}

export default Pricing
