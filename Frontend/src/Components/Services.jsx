import React,{useState} from 'react'
import { Palette,MessageSquare,TrendingUp,Target,Users,Briefcase,ArrowRight } from 'lucide-react';
const Services = () => {
const [activeService, setActiveService] = useState(null);

const services = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design & Visual Branding",
      tagline: "We design visuals that make brands look professional & trustworthy",
      items: [
        "Social Media Post Design (Instagram, Facebook, LinkedIn)",
        "Catalogue Design (Product / Corporate / Retail)",
        "Flyer & Poster Design",
        "Brochure Design (Digital & Print)",
        "Menu Card Design (Restaurant / Cafe / Hotel)",
        "Banner, Standee & Hoarding Design",
        "Business Card & Stationery Design",
        "Brand Identity Design (Logo, Color Palette, Fonts)"
      ],
      bestFor: "Shops, startups, restaurants, manufacturers, service businesses"
    },
    {
      id: 2,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Content Creation",
      tagline: "We create content that connects with your audience",
      items: [
        "Social Media Content Creatives",
        "Marketing Captions & Copywriting",
        "Promotional Visual Content",
        "Reels / Post Content Planning",
        "Brand Messaging & Tone Setup"
      ],
      bestFor: "Businesses looking to strengthen their brand voice"
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Management",
      tagline: "We manage your social presence so you can focus on business",
      items: [
        "Account Setup & Optimization",
        "Monthly Content Calendar",
        "Post Scheduling & Publishing",
        "Audience Engagement (Comments / DM strategy)",
        "Performance Tracking & Reporting"
      ],
      bestFor: "Busy entrepreneurs who need consistent online presence"
    },
    {
      id: 4,
      icon: <Target className="w-8 h-8" />,
      title: "Paid Marketing & Ads Management",
      tagline: "We help you reach the right audience with paid campaigns",
      items: [
        "Facebook & Instagram Ads",
        "Google Ads (Search / Display – Basic)",
        "Campaign Strategy & Setup",
        "Creative Ad Design & Copy",
        "Budget Planning & Performance Review"
      ],
      bestFor: "Businesses ready to scale with targeted advertising"
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: "ATL & BTL Marketing Activities",
      tagline: "Offline & on-ground marketing execution with real experience",
      items: [
        "BTL Activities (Promotions, Branding, Sampling)",
        "ATL Campaign Planning",
        "Shop Branding & Visibility Activities",
        "Market Research & Field Execution",
        "Promotional Strategy & Reporting"
      ],
      bestFor: "Brands needing physical market presence and activation"
    },
    {
      id: 6,
      icon: <Briefcase className="w-8 h-8" />,
      title: "Account & Brand Management",
      tagline: "Complete marketing & communication handled under one roof",
      items: [
        "Client Coordination & Requirement Handling",
        "Campaign Planning & Execution",
        "Brand Communication Management",
        "Monthly Performance Review",
        "Long-term Growth Strategy"
      ],
      bestFor: "Growing businesses needing a dedicated marketing partner"
    }
  ];

  return (
  <>
  
 <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What We Do at BrandCraft
            </h2>
            <p className="text-xl text-slate-600">
              We combine creativity, strategy, and execution to build strong brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-amber-500 transition cursor-pointer shadow-sm hover:shadow-lg"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="text-amber-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {service.tagline}
                </p>
                <button className="text-amber-500 font-semibold flex items-center hover:text-amber-600">
                  {activeService === service.id ? 'Hide Details' : 'View Details'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>

                {activeService === service.id && (
                  <div className="mt-6 pt-6 border-t border-slate-300">
                    <ul className="space-y-2 mb-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold">Best for:</span> {service.bestFor}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

  </>
  )
}

export default Services