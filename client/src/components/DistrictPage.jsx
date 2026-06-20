import React from 'react';
import { useParams, Link } from 'react-router-dom'; // SEO UPGRADE: Imported Link for internal routing
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Award, Droplet } from 'lucide-react';

// Comprehensive Agricultural Database mapping all 38 TN Districts to their crop & soil profiles
const tnDistrictAgriMatrix = {
  ariyalur: { zone: 'North Eastern', crops: 'Cashew, Sugarcane, and Paddy', soil: 'Red loam and clayey soil', challenge: 'Optimizing water utilization in limestone-heavy terrains' },
  chengalpattu: { zone: 'North Eastern', crops: 'Paddy, Vegetables, and Groundnut', soil: 'Sandy loam and alluvial soil', challenge: 'Managing peri-urban water tables efficiently' },
  chennai: { zone: 'Coastal Urban', crops: 'Horticulture and Urban Farming setups', soil: 'Sandy coastal soil', challenge: 'Terrace irrigation and micro-plot water distribution' },
  coimbatore: { zone: 'Western / Kongu', crops: 'Coconut, Arecanut, Banana, and Vegetables', soil: 'Red gravelly and deep black soils', challenge: 'Overcoming high groundwater depletion with automated drip lines' },
  cuddalore: { zone: 'North Eastern / Coastal', crops: 'Sugarcane, Cashew, Jackfruit, and Paddy', soil: 'Sandy loam and alluvial clay', challenge: 'Protecting root systems during coastal flooding while maintaining precise seasonal watering' },
  dharmapuri: { zone: 'North Western', crops: 'Mango Orchards, Ragi, and Vegetables', soil: 'Red sandy loam and rocky variations', challenge: 'Extreme summer water scarcity requiring high-efficiency inline drip tech' },
  dindigul: { zone: 'Southern', crops: 'Vegetables, Flowers, Maize, and Fruit Orchards', soil: 'Red loam and hills-slope soils', challenge: 'Pressure regulation across varied elevations and valley farms' },
  erode: { zone: 'Western / Kongu', crops: 'Turmeric, Sugarcane, Paddy, and Banana', soil: 'Highly fertile red loam and black cotton soils', challenge: 'Maximizing turmeric finger size using precise inline micro-irrigation' },
  kallakurichi: { zone: 'North Eastern', crops: 'Paddy, Sugarcane, and Blackgram', soil: 'Clay loam and red soil textures', challenge: 'Sub-surface water scaling for intensive multi-crop cultivation' },
  kanchipuram: { zone: 'North Eastern', crops: 'Paddy, Groundnut, and Horticultural Crops', soil: 'Alluvial and sandy clay loam', challenge: 'Transitioning traditional flow-irrigated paddy fields to precise water conservation arrays' },
  kanyakumari: { zone: 'High Rainfall / Southern', crops: 'Rubber, Coconut, Banana, and Spices', soil: 'Laterite and gravelly red soils', challenge: 'Providing supplemental micro-irrigation during dry spells on undulating terrains' },
  karur: { zone: 'Western / Mid-Central', crops: 'Moringa, Banana, Sugarcane, and Gloriosa Superba', soil: 'Sandy loam and red soil variants', challenge: 'Combatting low rainfall profiles with high-durability drip accessories' },
  krishnagiri: { zone: 'North Western', crops: 'Mango, Flowers (Rose), and Vegetables', soil: 'Red sandy loam and rocky red soils', challenge: 'Precision discharge management for precision floriculture greenhouse networks' },
  madurai: { zone: 'Southern', crops: 'Jasmine (Madurai Malli), Paddy, Pulses, and Cotton', soil: 'Red loam and black cotton clay soil', challenge: 'Maintaining delicate moisture indices for premium floriculture under intense heat profiles' },
  mayiladuthurai: { zone: 'Cauvery Delta', crops: 'Paddy, Blackgram, and Sugarcane', soil: 'Deep alluvial clayey soil', challenge: 'Alleviating tail-end delta water scarcity using alternate wetting micro-irrigation systems' },
  nagapattinam: { zone: 'Cauvery Delta / Coastal', crops: 'Paddy, Coconut, and Groundnut', soil: 'Coastal alluvial sandy clay', challenge: 'Preventing soil salinity ingress via optimized surface moisture maintenance' },
  namakkal: { zone: 'North Western', crops: 'Tapioca, Onion, Turmeric, and Poultry Forage Crops', soil: 'Red loam and mixed black soils', challenge: 'Boosting starch percentage in tapioca crops using uniform water delivery patterns' },
  nilgiris: { zone: 'Hilly High Elevation', crops: 'Tea Plantations, Coffee, Potato, and Exotic Vegetables', soil: 'Laterite porous and organic-rich hill soils', challenge: 'Deploying Pressure Compensating (PC) online drippers to combat severe slope pressure variations' },
  perambalur: { zone: 'Central', crops: 'Small Onion, Maize, and Cotton', soil: 'Black cotton and red soil patches', challenge: 'Scaling yield density for small onion fields under highly volatile rainfall conditions' },
  pudukkottai: { zone: 'Southern / Coastal', crops: 'Groundnut, Coconut, and Paddy', soil: 'Red lateritic gravelly and sandy soils', challenge: 'Eliminating dry-zone crop failure through deep-root localized micro-drippers' },
  ramanathapuram: { zone: 'Southern Coastal', crops: 'Chilli (Ramnad Mundu), Coconut, and Millets', soil: 'Sandy, saline-prone coastal soil profiles', challenge: 'Surviving extreme coastal aridity through sub-surface drip arrays tailored for high-salinity tolerance' },
  ranipet: { zone: 'North Eastern', crops: 'Paddy, Groundnut, and Sugarcane', soil: 'Sandy loam and clay loam mix', challenge: 'Optimizing industrial-adjacent groundwater usage profiles via efficient filtration grids' },
  salem: { zone: 'North Western', crops: 'Tapioca, Mango, Arecanut, and Turmeric', soil: 'Red sandy loam and dark clay pockets', challenge: 'Mitigating hard-water scaling in drip accessories using specialized sand and disc filters' },
  sivaganga: { zone: 'Southern', crops: 'Paddy, Coconut, Groundnut, and Sugarcane', soil: 'Lateritic red and sandy clay configurations', challenge: 'Sustaining orchard canopy expansion amidst severe sub-surface water depletion' },
  tenkasi: { zone: 'Southern Foothills', crops: 'Paddy, Coconut, Banana, and Spices', soil: 'Red loam and black clay variants', challenge: 'Harnessing seasonal foothill runoffs efficiently with high-volume filter manifolds' },
  thanjavur: { zone: 'Cauvery Delta Heart', crops: 'Paddy (Rice), Coconut, Sugarcane, and Plantains', soil: 'Rich alluvial river clay deposits', challenge: 'Overcoming heavy delta clay compaction with deep-oxygenating micro-irrigation systems' },
  theni: { zone: 'Southern Valley', crops: 'Grapes, Banana, Vegetables, and Cardamom', soil: 'Deep red loam and highly fertile alluvial soil', challenge: 'Maintaining exact daily volumetric hydration targets for vineyard operations' },
  thoothukudi: { zone: 'Southern Coastal', crops: 'Chilli, Cotton, Green Gram, and Palmyra products', soil: 'Black cotton soil and coastal saline sands', challenge: 'Managing high-clay water expansion and contraction profiles without snapping inline pipe structures' },
  tiruchirappalli: { zone: 'Central Delta', crops: 'Banana, Paddy, Sugarcane, and Vegetables', soil: 'Alluvial loam and sandy red soils', challenge: 'Enhancing commercial banana bunch metrics through uniform fertigation distribution loops' },
  tirunelveli: { zone: 'Southern', crops: 'Paddy, Banana, Coconut, and Spices', soil: 'Red loam, alluvial patches, and black soil fields', challenge: 'Counterbalancing dry wind evaporation vectors using efficient low-discharge drippers' },
  tirupattur: { zone: 'North Eastern', crops: 'Paddy, Sugarcane, and Coconut', soil: 'Red sandy loam', challenge: 'Maximizing minimal structural reservoir output capabilities via dynamic micro-irrigation loops' },
  tiruppur: { zone: 'Western / Kongu', crops: 'Coconut, Maize, Vegetables, and Cotton', soil: 'Red gravelly and calcareous black soils', challenge: 'Combating intensive groundwater scarcity across industrial agricultural belts via automation' },
  tiruvallur: { zone: 'North Eastern', crops: 'Paddy, Vegetables, and Flowers', soil: 'Alluvial sandy and clay loam profiles', challenge: 'Supplying immediate local food security markets with highly reliable seasonal drip accessories' },
  tiruvannamalai: { zone: 'North Eastern', crops: 'Paddy, Groundnut, Sugarcane, and Pulses', soil: 'Red sandy loam and dark clay variants', challenge: 'Securing massive sprawling groundnut farms against cyclical drought conditions' },
  tiruvarur: { zone: 'Cauvery Delta Core', crops: 'Paddy, Green Gram, and Blackgram', soil: 'Deep alluvial heavy clay soils', challenge: 'Transitioning monoculture paddy belts into multi-crop micro-irrigated zones successfully' },
  vellore: { zone: 'North Eastern', crops: 'Sugarcane, Paddy, Banana, and Vegetables', soil: 'Sandy loam and river alluvial patches', challenge: 'Countering high total dissolved solids (TDS) parameters using heavy-duty filter systems' },
  viluppuram: { zone: 'North Eastern', crops: 'Sugarcane, Paddy, Groundnut, and Cashew', soil: 'Red loam and black cotton clay deposits', challenge: 'Delivering continuous high-pressure supply systems across extensive sugarcane cooperatives' },
  virudhunagar: { zone: 'Southern', crops: 'Cotton, Maize, Chilli, and Pulses', soil: 'Extensive black cotton soil matrices', challenge: 'Managing low moisture absorption properties of black soils via slow-dripping micro arrays' }
};

export default function DistrictPage() {
  const { districtName } = useParams();
  const districtKey = districtName ? districtName.toLowerCase() : '';
  const agri = tnDistrictAgriMatrix[districtKey] || {
    zone: 'Tamil Nadu Regional',
    crops: 'Local Agricultural Crops, Cash Crops, and Orchards',
    soil: 'Regional Soil Profiles',
    challenge: 'Optimizing agricultural water efficiency and increasing crop yields'
  };

  const districtTitle = districtKey.charAt(0).toUpperCase() + districtKey.slice(1);

  // Dynamic injection of structured data schema for rich Google snippets
  const dynamicSchema = {
    "@context": "https://schema.org",
    "@type": "AgriculturalService",
    "name": `KonguNadu Agro Products (KAPS) - ${districtTitle} Division`,
    "description": `Authorized manufacturer and distributor of VISDHA micro irrigation systems, drip accessories, and inline technology in ${districtTitle}, Tamil Nadu. Approved under PMKSY government subsidy scheme.`,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${districtTitle} District`,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Tamil Nadu"
      }
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "KonguNadu Agro Products",
      "telephone": "+91-9962699988", // Updated with actual phone number
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gobichettipalayam",
        "addressRegion": "TN",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      {/* Dynamic SEO Meta Manipulation via react-helmet-async */}
      <Helmet>
        <title>Top Irrigation Dealers in {districtTitle} | VISDHA Drip Subsidy | KAPS</title>
        <meta name="description" content={`Looking for the top irrigation dealers in ${districtTitle}? KAPS supplies certified VISDHA inline drip technology & accessories under the Tamil Nadu PMKSY subsidy scheme.`} />
        <meta name="keywords" content={`Irrigation Dealers in ${districtTitle}, Drip irrigation systems ${districtTitle}, VISDHA brand subsidy ${districtTitle}, Inline drip technology Tamil Nadu, Micro irrigation ${districtTitle}`} />
        <link rel="canonical" href={`https://www.kongunaduagroproduct.com/service-areas/${districtKey}`} />
        <script type="application/ld+json">
          {JSON.stringify(dynamicSchema)}
        </script>
      </Helmet>

      {/* Hero Banner Section */}
      <div className="bg-emerald-950 text-white py-20 px-4 text-center border-b-4 border-emerald-500">
        <div className="max-w-4xl mx-auto">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm bg-emerald-900/50 px-4 py-1.5 rounded-full border border-emerald-800">
            {agri.zone} Agricultural Zone
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
            Top Irrigation Dealers in {districtTitle}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/90 mt-4 max-w-2xl mx-auto">
            Providing engineered VISDHA micro irrigation systems and components designed specifically for local farming requirements.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {/* SEO FIX: Replaced <a> with React Router <Link> */}
            <Link to="/request-quote" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors">
              Apply For Government Subsidy
            </Link>
          </div>
        </div>
      </div>

      {/* Main Analysis and Content Hub */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Columns: Agricultural Realities and Product Layout */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section 1: Dynamic Agro-Alignment Matrix */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">
              Optimized Irrigation Solutions for {districtTitle} Farms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Farming operations in <strong>{districtTitle}</strong> require localized precision water management systems. A generic setup results in uneven discharge profiles and clogged filter channels. KonguNadu Agro Products (KAPS) manufactures component configurations customized to match the localized agricultural reality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50/50 p-5 rounded-lg border border-emerald-100/50">
                <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider">Primary Crop Footprint</span>
                <p className="text-gray-900 font-semibold text-lg mt-1">{agri.crops}</p>
              </div>
              <div className="bg-emerald-50/50 p-5 rounded-lg border border-emerald-100/50">
                <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider">Dominant Soil Profile</span>
                <p className="text-gray-900 font-semibold text-lg mt-1">{agri.soil}</p>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 p-5 rounded-lg border border-amber-200 text-amber-900">
              <h4 className="font-bold flex items-center gap-2">
                <Droplet className="w-5 h-5 text-amber-700" /> Regional Water Challenge Resolution:
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-amber-950">
                {agri.challenge}. Our VISDHA systems deploy localized engineering adjustments—incorporating specified emitter configurations and chemical filtration matrices—to directly resolve this performance barrier.
              </p>
            </div>
          </div>

          {/* Section 2: Core Engineering Capabilities */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              VISDHA Inline Drip Technology & Component Configurations
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our proprietary in-house brand, <strong>VISDHA</strong>, manufactures precision micro-irrigation systems built using raw materials configured to withstand high ultraviolet radiation exposure and sudden seasonal temperature fluxes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Advanced Emitter Matrices</h4>
                  <p className="text-gray-600 text-sm mt-1">Non-clogging internal labyrinth architectures that ensure uniform volumetric water release throughout the length of the system.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Heavy-Duty Filtration Assemblies</h4>
                  <p className="text-gray-600 text-sm mt-1">Engineered sand, media, and disc separation arrays optimized to capture local particulate loads before they reach crop pathways.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Subsidy Compliance Verification</h4>
                  <p className="text-gray-600 text-sm mt-1">Every component features laser-etched standardization markings required for validation checks by district agricultural officers.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">High-Grade Drip Accessories</h4>
                  <p className="text-gray-600 text-sm mt-1">Robust joiners, take-offs, and grommets manufactured to completely prevent operational pressure drops at connection boundaries.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Subsidy & Contact Callouts */}
        <div className="space-y-6">
          
          {/* Subsidy Allocation Card */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white p-6 rounded-xl shadow-md border border-emerald-800">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl font-bold">TN Government Subsidy Assistance</h3>
            </div>
            <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">
              VISDHA micro-irrigation products are approved under the Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) framework through TANHODA/MIMIS portals.
            </p>
            <ul className="space-y-3 border-t border-emerald-800/60 pt-4 mb-6 text-sm text-emerald-200">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" /> <strong>100% Subsidy</strong> for Small & Marginal Farmers
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" /> <strong>75% Subsidy</strong> for Other Farmers
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" /> Comprehensive documentation handling support
              </li>
            </ul>
            {/* SEO FIX: Replaced <a> with React Router <Link> */}
            <Link to="/contact" className="block text-center w-full bg-white hover:bg-gray-100 text-emerald-950 font-bold py-3 rounded-lg shadow transition-colors">
              Verify Subsidy Eligibility
            </Link>
          </div>

          {/* Quick Support Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Field Layout Support?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get in touch to arrange an on-site evaluation for your farm property anywhere in {districtTitle}.
            </p>
            <div className="text-emerald-700 font-extrabold text-xl tracking-wide border-t border-gray-50 pt-4">
              +91-9962699988 {/* Updated with actual phone number */}
            </div>
            <span className="text-xs text-gray-400 block mt-1">Support Available: Monday - Saturday (9:00 AM - 6:00 PM)</span>
          </div>

        </div>
      </div>
    </div>
  );
}