import React, { useState } from 'react';
import {
  Box, Database, ArrowRight, Zap, Cloud, Smartphone,
  Banknote, Wifi, Brain, Minimize, Bot, Server,
  RadioTower, Check, Network, Search, Shield,
  Gamepad2, HeartPulse, Landmark, Store, Handshake,
  ArrowLeftRight, CheckCircle2, CalendarCheck, Mail, Globe
} from 'lucide-react';

export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 antialiased scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              {/* Redington Logo Area */}
              <div className="text-[#002f5d] font-bold text-2xl tracking-tight flex items-center gap-2">
                <Box className="text-[#002f5d]" size={28} /> REDINGTON
              </div>
              <div className="text-gray-400">|</div>
              {/* Couchbase Logo Area */}
              <div className="text-[#ea2328] font-bold text-2xl tracking-tight flex items-center gap-2">
                <Database className="text-[#ea2328]" size={28} /> Couchbase
              </div>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
              <button onClick={() => scrollToSection('intro')} className="hover:text-[#ea2328] transition-colors">Intro</button>
              <button onClick={() => scrollToSection('problems')} className="hover:text-[#ea2328] transition-colors">Why Couchbase</button>
              <button onClick={() => scrollToSection('features')} className="hover:text-[#ea2328] transition-colors">Offerings & Features</button>
              <button onClick={() => scrollToSection('clients')} className="hover:text-[#ea2328] transition-colors">Clients</button>
              <button onClick={() => scrollToSection('partner-benefits')} className="text-[#002f5d] hover:text-[#ea2328] transition-colors">Partner Benefits</button>
            </div>
            <div className="hidden md:flex">
              <button
                onClick={() => scrollToSection('partner-benefits')}
                className="bg-[#ea2328] text-white px-6 py-2.5 rounded-full font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
              >
                Deal Registration
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / Intro Section */}
      <section
        id="intro"
        className="text-white pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden"
        style={{ backgroundImage: 'radial-gradient(circle at top right, #2a080a 0%, #000000 100%)' }}
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-600 blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 blur-[100px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-sm font-semibold mb-6 tracking-wide uppercase">
                Redington Partner Toolkit
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Win More Modern App Deals from <span className="bg-gradient-to-r from-[#ea2328] to-[#ff6b6b] bg-clip-text text-transparent">Cloud to Edge</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Equip your customers with an AI-ready NoSQL platform designed for speed, flexibility, and sub-millisecond performance. Resell, Refer, or Co-sell Couchbase® with Redington.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('partner-benefits')}
                  className="bg-[#ea2328] hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-center transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2"
                >
                  View Commissions <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-8 rounded-full text-center transition-all backdrop-blur-sm"
                >
                  Explore Offerings
                </button>
              </div>
            </div>

            {/* Hero Graphic (CSS/SVG composite) */}
            <div className="hidden lg:block relative">
              <div className="bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 shadow-2xl relative z-10 transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">Couchbase Capella DBaaS</div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                  <div className="flex gap-4 pt-4">
                    <div className="w-1/3 h-24 bg-gray-800 rounded-lg border border-gray-600 flex flex-col items-center justify-center gap-2">
                      <Zap className="text-yellow-400" size={24} />
                      <span className="text-xs text-gray-400">Sub-ms Latency</span>
                    </div>
                    <div className="w-1/3 h-24 bg-gray-800 rounded-lg border border-gray-600 flex flex-col items-center justify-center gap-2">
                      <Cloud className="text-blue-400" size={24} />
                      <span className="text-xs text-gray-400">Multi-Cloud</span>
                    </div>
                    <div className="w-1/3 h-24 bg-gray-800 rounded-lg border border-gray-600 flex flex-col items-center justify-center gap-2">
                      <Smartphone className="text-purple-400" size={24} />
                      <span className="text-xs text-gray-400">Offline-First</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative background elements */}
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-red-500/30 rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Problems vs How Couchbase Helps */}
      <section id="problems" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#002f5d] font-bold tracking-wide uppercase text-sm mb-2">The Market Reality</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Modern Problems vs. Couchbase Solutions</h3>
            <p className="text-gray-600 text-lg">Enterprises are struggling with rigid data architectures. Here is how you can position Couchbase to solve their most critical pain points.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Problems */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Banknote size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">High TCO & Database Sprawl</h4>
                  <p className="text-gray-600">Customers are paying for multiple distinct databases (cache, relational, document, search) leading to high licensing, infrastructure, and operational costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Wifi size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Unreliable Edge Connectivity</h4>
                  <p className="text-gray-600">Apps in retail, healthcare, and field services fail or experience severe latency when internet connectivity drops or is spotty.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Complex AI Integration</h4>
                  <p className="text-gray-600">Integrating Vector Search and Large Language Models (LLMs) requires bolting on new, unfamiliar databases, creating data silos and security risks.</p>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-8 relative">
              {/* Connector lines visible only on large screens */}
              <div className="hidden md:block absolute left-[-3rem] top-12 bottom-12 w-0.5 bg-gray-200"></div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 transform md:translate-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Minimize size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Lower TCO by up to 50%</h4>
                  <p className="text-gray-600">Couchbase consolidates cache, database, search, and analytics into a single platform. <span className="font-semibold text-[#ea2328]">Industry-leading price-performance.</span></p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 transform md:translate-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Always-On Offline-First</h4>
                  <p className="text-gray-600">Capella App Services and Couchbase Lite embedded database enable apps to work 100% offline and sync securely when connectivity is restored.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 transform md:translate-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">AI-Ready from Cloud to Edge</h4>
                  <p className="text-gray-600">Built-in Vector Search and predictive queries. Run AI locally for privacy or sync with cloud models. No separate vector database required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Couchbase Offerings */}
      <section id="features" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#002f5d] font-bold tracking-wide uppercase text-sm mb-2">The Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You Are Selling</h3>
            <p className="text-gray-600 text-lg">Couchbase provides deployment flexibility to meet any customer's technical and regulatory requirements.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <Cloud size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Capella (DBaaS)</h4>
                <p className="text-gray-600 mb-6 min-h-[80px]">Fully managed multicloud NoSQL Database-as-a-Service on AWS, GCP, and Azure.</p>
                <ul className="space-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> JSON Document & Key-Value</li>
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> Built-in Search, Eventing, Analytics</li>
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> Automated Scaling & Management</li>
                </ul>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-2 bg-gradient-to-r from-[#ea2328] to-red-400"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center text-[#ea2328] mb-6">
                  <Server size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Server Enterprise</h4>
                <p className="text-gray-600 mb-6 min-h-[80px]">Self-managed software for maximum control, deployable on-prem, VMs, or Kubernetes.</p>
                <ul className="space-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> Memory-first architecture</li>
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> Geo-distribution & workload isolation</li>
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> Distributed ACID transactions</li>
                </ul>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                  <RadioTower size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Mobile & Edge</h4>
                <p className="text-gray-600 mb-6 min-h-[80px]">Capella App Services & Couchbase Lite for building robust mobile and IoT applications.</p>
                <ul className="space-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> Offline-first with bidir. sync</li>
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> Peer-to-peer data sync</li>
                  <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> On-device AI & Vector Search</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Tech Features Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-10 text-gray-900">Key Technological Differentiators</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <Database className="mx-auto text-[#ea2328] mb-4" size={36} />
                <h5 className="font-bold text-gray-900 mb-2">SQL++</h5>
                <p className="text-sm text-gray-600">Query JSON data using familiar SQL syntax. Minimal learning curve for developers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <Network className="mx-auto text-[#002f5d] mb-4" size={36} />
                <h5 className="font-bold text-gray-900 mb-2">Memory-First</h5>
                <p className="text-sm text-gray-600">Integrated cache provides unparalleled sub-millisecond read/write speeds.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <Search className="mx-auto text-purple-600 mb-4" size={36} />
                <h5 className="font-bold text-gray-900 mb-2">Vector Search</h5>
                <p className="text-sm text-gray-600">Power GenAI, semantic search, and RAG architectures within the same database.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <Shield className="mx-auto text-green-600 mb-4" size={36} />
                <h5 className="font-bold text-gray-900 mb-2">Enterprise Security</h5>
                <p className="text-sm text-gray-600">End-to-end encryption, fine-grained RBAC, and SOC2 compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Clients & Verticals */}
      <section
        id="clients"
        className="py-24 bg-[#1a1a1a] text-white relative"
        style={{
          backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+\")"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-red-400 font-bold tracking-wide uppercase text-sm mb-2">Proven Success</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Trusted by 30% of the Fortune 100</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Referenceable use cases across major industries to help you close deals faster.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Vertical 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4 text-white">
                <Gamepad2 size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Gaming</h4>
              <p className="text-sm text-gray-400 mb-4">Handles massive, unpredictable traffic ensuring uninterrupted gameplay for millions.</p>
              <div className="border-t border-gray-700 pt-4 mt-auto">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Client Example:</span>
                <div className="font-semibold text-white mt-1">Paddy Power Betfair</div>
              </div>
            </div>

            {/* Vertical 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4 text-white">
                <HeartPulse size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Healthcare</h4>
              <p className="text-sm text-gray-400 mb-4">Secure patient data management and offline-first apps for medical devices & field workers.</p>
              <div className="border-t border-gray-700 pt-4 mt-auto">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Client Example:</span>
                <div className="font-semibold text-white mt-1">Becton Dickinson (BD), AEDES</div>
              </div>
            </div>

            {/* Vertical 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4 text-white">
                <Landmark size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Retail Banking</h4>
              <p className="text-sm text-gray-400 mb-4">Real-time fraud detection, hyper-personalized customer journeys, and mainframe offloading.</p>
              <div className="border-t border-gray-700 pt-4 mt-auto">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Client Example:</span>
                <div className="font-semibold text-white mt-1">Leading Global Banks</div>
              </div>
            </div>

            {/* Vertical 4 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4 text-white">
                <Store size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Retail / POS</h4>
              <p className="text-sm text-gray-400 mb-4">Always-on Point-of-Sale systems that continue taking orders even if the store loses internet.</p>
              <div className="border-t border-gray-700 pt-4 mt-auto">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Client Example:</span>
                <div className="font-semibold text-white mt-1">Quantic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits: Discounts & Commissions */}
      <section id="partner-benefits" className="py-24 bg-[#002f5d] text-white relative overflow-hidden">
        {/* Gold Accent background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-500/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-yellow-400 font-bold tracking-wide uppercase text-sm mb-2">Redington Exclusive</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Partner Discounts & Commissions</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Access attractive programmatic benefits when you engage with Couchbase through Redington's PartnerEngage program.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Resell Card */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-[#ea2328] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">POPULAR</div>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#ea2328] mb-6">
                <Handshake size={32} />
              </div>
              <h4 className="text-2xl font-extrabold mb-2">Resell Program</h4>
              <p className="text-gray-500 mb-6">Manage the customer transaction and unlock deep margins.</p>

              <div className="text-5xl font-black text-[#ea2328] mb-6">
                Up to 20% <span className="text-lg text-gray-500 font-normal">Discount Share</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">Applied automatically at Deal Registration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">Passed on to you at deal closure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">Shared with you once the subscription is booked.</span>
                </li>
              </ul>
            </div>

            {/* Referral Card */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#002f5d] mb-6">
                <ArrowLeftRight size={32} />
              </div>
              <h4 className="text-2xl font-extrabold mb-2">Referral Program</h4>
              <p className="text-gray-500 mb-6">Introduce the opportunity, let Couchbase close, earn a fee.</p>

              <div className="text-5xl font-black text-[#002f5d] mb-6">
                Up to 10% <span className="text-lg text-gray-500 font-normal">Commission</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">Earned on Annual Contract Value (ACV) for referred deals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">Paid out within the first 6 months of booking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">Requires validated opportunity and PartnerEngage acceptance.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-blue-200">
            <p>* All discounts and commissions are subject to Couchbase approval, program terms, and deal registration acceptance. Varies by deal size and contribution.</p>
          </div>
        </div>
      </section>

      {/* Deal Registration Form / CTA */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg text-center">
            <div className="inline-block p-4 rounded-full bg-red-100 text-[#ea2328] mb-6">
              <CalendarCheck size={36} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Protect Your Opportunity. Register Today.</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Deal registration is the cornerstone of PartnerEngage. It rewards and protects partners who proactively find and register new sales opportunities.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8 bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <Check className="text-[#ea2328] mt-1 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Must be unique and not known to Couchbase.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-[#ea2328] mt-1 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Decision expected within 6 months.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-[#ea2328] mt-1 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Use corporate email (No Gmail/Yahoo).</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-[#ea2328] mt-1 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Meet with Account Manager within 10 days.</span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('inquiryForm')}
              className="bg-[#ea2328] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-red-500/30 transition-all"
            >
              Start Deal Registration
            </button>
          </div>
        </div>
      </section>

      {/* Footer / Lead Gen Form */}
      <Footer />
    </div>
  );
}

function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In production, this would integrate with HubSpot or Redington's CRM API
  };

  return (
    <footer id="inquiryForm" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="text-white font-bold text-xl flex items-center gap-2">
              <Box className="text-[#002f5d] brightness-200" size={24} /> REDINGTON
            </div>
            <div className="text-gray-600">|</div>
            <div className="text-[#ea2328] font-bold text-xl flex items-center gap-2">
              <Database className="text-[#ea2328]" size={24} /> Couchbase
            </div>
          </div>
          <h4 className="text-2xl font-bold mb-4">Got questions? I'm happy to help.</h4>
          <p className="text-gray-400 mb-8">Submit your query or opportunity details below, and our Redington Couchbase alliance team will get back to you shortly to assist with qualification and sizing.</p>

          <div className="space-y-4 text-gray-400">
            <p className="flex items-center"><Mail className="mr-3 text-[#ea2328]" size={18} /> pratik.shukla@redington.group</p>
            <p className="flex items-center"><Globe className="mr-3 text-[#ea2328]" size={18} /> www.redington.group/couchbase</p>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 min-h-[400px] flex flex-col justify-center">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
                <CheckCircle2 className="text-green-400" size={32} />
              </div>
              <h5 className="text-xl font-bold mb-2">Query Received!</h5>
              <p className="text-gray-400">Thank you for registering your interest. The Redington Couchbase alliance team will contact you shortly.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm text-[#ea2328] hover:text-red-400 font-semibold"
              >
                Submit another query
              </button>
            </div>
          ) : (
            <>
              <h5 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Submit Your Query</h5>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">First Name *</label>
                    <input type="text" required className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-[#ea2328]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Last Name *</label>
                    <input type="text" required className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-[#ea2328]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Corporate Email *</label>
                  <input type="email" required className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-[#ea2328]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Company Name *</label>
                  <input type="text" required className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-[#ea2328]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Industry/Vertical</label>
                  <select className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-[#ea2328] appearance-none">
                    <option>Finance / Banking</option>
                    <option>Healthcare & Pharmaceuticals</option>
                    <option>Gaming / Media / Telco</option>
                    <option>Retail</option>
                    <option>Defence & Public Sector</option>
                    <option>Manufacturing / IoT</option>
                    <option>Other / Horizontal</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#002f5d] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded transition-colors mt-4">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Redington. All rights reserved. Couchbase is a registered trademark of Couchbase, Inc.</p>
      </div>
    </footer>
  );
}