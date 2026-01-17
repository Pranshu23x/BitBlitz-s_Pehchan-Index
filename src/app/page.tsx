'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import Footer from '@/components/Footer';

const BACKGROUND_IMAGE = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/43ed4dcc-8142-4e16-9eb6-ac920ccad386/image-1768469527733.png?width=8000&height=8000&resize=contain';

const DASHBOARD_SCREENSHOT = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/43ed4dcc-8142-4e16-9eb6-ac920ccad386/image-1768466947300.png?width=8000&height=8000&resize=contain';

const teamMembers = [
{
  name: 'Pranshu Kumar',
  role: 'Solo Developer & Architect',
  contribution: 'End-to-end development: data pipeline engineering, interactive visualizations, and scalable frontend architecture'
}];


export default function LandingPage() {
  return (
    <div
      className="min-h-screen text-[#1a1a2e]"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}>

      <nav className="sticky top-0 z-50 mx-4 sm:mx-6 pt-2">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-[#fffbf0]/80 rounded-[2rem] px-5 sm:px-8 py-3 sm:py-4 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/f9017d5e-73bf-44cc-9774-6f7da4784972/image-1767439313415.png?width=8000&height=8000&resize=contain"
                    alt="Pehchaan Index Logo"
                    className="w-full h-full object-contain" />

                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#1E3A8A]">Pehchaan Index</h1>
                  <p className="text-xs sm:text-sm text-[#4a5568] font-medium">Evidence-Based Governance at Scale</p>
                </div>
              </div>
              <Link
                href="/dashboard"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#1E3A8A]/20 text-[#1E3A8A] text-sm font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 shadow-sm">

                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="py-6 sm:py-8 lg:py-10 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 text-[#1E3A8A] text-sm font-medium mb-6">

                  <span className="w-2 h-2 bg-[#1E3A8A] rounded-full animate-pulse" />
                  UIDAI Data Hackathon
                </motion.div>

                <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl leading-[1.2] mb-5 text-black tracking-tight font-bold">
                    Detecting demographic <em className="italic font-medium">stress</em> and 
                    <span className="block"><em className="italic font-medium">service gaps</em> from Aadhaar behaviour.</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-[#4a5568] mb-8 leading-relaxed font-medium max-w-xl">
                    Data → Signal → Decision → Administrative Action. 
                    Converting 1.4 billion+ Aadhaar update records into measurable outcomes—enabling 
                    resource reallocation, trend forecasting, and real-time operational visibility for administrators.
                  </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44] hover:from-[#2d2d44] hover:to-[#1a1a2e] text-white font-semibold text-base transition-all duration-300 shadow-[0_4px_24px_rgba(26,26,46,0.4)] border border-white/10 w-full sm:w-auto">

                      View Dashboard
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold text-base transition-all duration-300 w-full sm:w-auto">

                      See Workflow
                    </motion.button>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                  { value: '36', label: 'States & UTs Covered' },
                  { value: '700+', label: 'Districts Analyzed' },
                  { value: '3', label: 'Demographic Segments' }].
                  map((stat, idx) =>
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    className="text-center p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60">

                      <div className="text-2xl sm:text-3xl font-bold text-[#1E3A8A]">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-[#4a5568] font-medium">{stat.label}</div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="order-1 lg:order-2 lg:col-span-1 lg:-mr-20 xl:-mr-32"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>

                <div className="relative lg:scale-110 lg:origin-left">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#1E3A8A]/20 via-[#D97706]/20 to-[#1E3A8A]/20 rounded-3xl blur-2xl opacity-60" />
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/40">
                    <img
                      src={DASHBOARD_SCREENSHOT}
                      alt="Pehchaan Index Dashboard Preview"
                      className="w-full h-auto" />

                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-white shadow-lg border border-[#1E3A8A]/10 flex items-center gap-2">

                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-[#1a1a2e]">Real-Time Analytics</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left pl-6 pr-8 lg:pl-[calc((100vw-72rem)/2+1.5rem)] lg:pr-12 w-1/2 flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6 tracking-tight">
                The Problem We Solve
              </h2>
              <p className="text-base text-[#4a5568] mb-6 leading-relaxed font-medium">
                Aadhaar enrolment and update demand shows strong regional and temporal variation, yet the absence of real-time demand visibility leads to reactive decision-making. Current systems lack the ability to convert large-scale Aadhaar data into predictive signals that enable proactive planning and system optimization.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/50 border border-[#1E3A8A]/10">
                  <h3 className="text-[#1E3A8A] font-bold text-base mb-1">Reactive Resource Deployment</h3>
                  <p className="text-sm text-[#4a5568] font-medium">Mobile vans and enrolment centres are deployed after backlogs form—not before demand spikes occur.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/50 border border-[#1E3A8A]/10">
                  <h3 className="text-[#1E3A8A] font-bold text-base mb-1">Invisible Migration Patterns</h3>
                  <p className="text-sm text-[#4a5568] font-medium">Address update surges signal population movement, but this data sits unused for urban planning.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/50 border border-[#1E3A8A]/10">
                  <h3 className="text-[#1E3A8A] font-bold text-base mb-1">Missed Early Warnings</h3>
                  <p className="text-sm text-[#4a5568] font-medium">Age-group spikes and persistent anomalies indicate structural access issues—but without dashboards, they go unnoticed.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-1/2 flex-shrink-0">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/43ed4dcc-8142-4e16-9eb6-ac920ccad386/image-1768478737407.png?width=8000&height=8000&resize=contain"
                alt="Monthly Aadhaar Updates Trend Chart"
                className="w-full h-[400px] lg:h-[480px] object-cover object-left rounded-l-2xl shadow-lg" />
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-3 tracking-tight">
                Updates → Societal Signals
              </h2>
              <p className="text-sm text-[#4a5568] font-medium max-w-2xl mx-auto">
                Every Aadhaar update encodes a real-world event. We map update types to measurable societal indicators.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-2xl font-bold text-[#1E3A8A] mb-2">Address Updates ↑</div>
                <div className="text-sm font-semibold text-[#4a5568] uppercase tracking-wider">Migration Indicator</div>
                <p className="mt-2 text-xs text-[#4a5568]">Signals geographic shifts and housing demand for urban planners</p>
              </div>
              <div className="text-center p-6">
                <div className="text-2xl font-bold text-[#1E3A8A] mb-2">Age-Group Spikes</div>
                <div className="text-sm font-semibold text-[#4a5568] uppercase tracking-wider">Lifecycle Events</div>
                <p className="mt-2 text-xs text-[#4a5568]">Triggers school enrolment drives and pension service readiness</p>
              </div>
              <div className="text-center p-6">
                <div className="text-2xl font-bold text-[#1E3A8A] mb-2">Persistent Anomalies</div>
                <div className="text-sm font-semibold text-[#4a5568] uppercase tracking-wider">Structural Access Issues</div>
                <p className="mt-2 text-xs text-[#4a5568]">Identifies districts with saturation bottlenecks requiring intervention</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="relative">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/43ed4dcc-8142-4e16-9eb6-ac920ccad386/image-1768470296036.png?width=8000&height=8000&resize=contain"
                alt="Pehchaan Index Workflow"
                className="w-full h-auto block" />

            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4 tracking-tight">
                    Meet the Builder
                  </h2>
                  <p className="text-[#4a5568] font-medium">
                    Solo Developer · UIDAI Data Hackathon
                  </p>
                </div>
              
              <div className="flex justify-center">
                {teamMembers.map((member, idx) =>
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] max-w-sm text-center">

                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E3A8A]/20 to-[#1E3A8A]/5 flex items-center justify-center mx-auto mb-5">
                      <Users className="w-10 h-10 text-[#1E3A8A]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-1">{member.name}</h3>
                    <p className="text-sm text-[#D97706] font-semibold mb-4">{member.role}</p>
                    <p className="text-sm text-[#4a5568] leading-relaxed">{member.contribution}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4 tracking-tight">
                View Dashboard
              </h2>
              <p className="text-[#4a5568] mb-8 max-w-xl mx-auto font-medium">
                Explore national overviews, drill down to any district, 
                and discover signals that drive smarter governance.
              </p>
              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44] hover:from-[#2d2d44] hover:to-[#1a1a2e] text-white font-semibold text-lg transition-all duration-300 shadow-[0_4px_24px_rgba(26,26,46,0.4)] border border-white/10">

                  View Dashboard
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}