import { motion } from 'motion/react';
import { 
  Download, 
  Activity, 
  Wallet, 
  ShieldCheck, 
  Battery, 
  MapPin, 
  TrendingUp,
  Gift,
  Smartphone,
  Star,
  X,
  Check
} from 'lucide-react';
import { useEffect, useState } from 'react';

function Counter({ end, suffix = '', prefix = '' }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function App() {
  const [steps, setSteps] = useState(8432);
  const balance = (steps * 0.01).toFixed(2); // 1 step = 1 paisa (0.01 INR)
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [withdrawState, setWithdrawState] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleSimulateWalk = () => {
    setSteps(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">StridePay</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How it Works</a>
            <a href="#community" className="hover:text-emerald-600 transition-colors">Hyderabad Community</a>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Get APK</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Now live in Telangana & Andhra Pradesh
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Turn your morning walk into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">real rewards.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Join thousands of users earning digital vouchers, UPI cash, and exclusive local discounts just by hitting their daily step goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download APK Now
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
              <span>4.9/5 from 10k+ users</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-none"
          >
            <div className="relative rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19.5] max-w-[300px] mx-auto">
              <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-20 rounded-b-3xl w-40 mx-auto"></div>
              <div className="absolute inset-0 bg-emerald-50 flex flex-col">
                {/* App UI Mockup */}
                <div className="p-6 pt-12 bg-emerald-500 text-white rounded-b-3xl shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-emerald-100 text-sm">Today's Steps</p>
                      <h3 className="text-3xl font-bold">{steps.toLocaleString()}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                    <div className="bg-white h-2 rounded-full transition-all duration-300" style={{ width: `${Math.min((steps / 10000) * 100, 100)}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-emerald-100 mb-4">
                    <span>0</span>
                    <span>Goal: 10,000</span>
                  </div>
                  <button onClick={handleSimulateWalk} className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl text-sm font-medium backdrop-blur-sm transition-colors flex items-center justify-center gap-2 active:scale-95">
                    <Activity className="w-4 h-4" />
                    Simulate 1 Step (4m) = 1 Paisa
                  </button>
                </div>
                
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <button onClick={() => setIsWalletOpen(true)} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-left hover:border-emerald-300 transition-colors group relative overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <Wallet className="w-4 h-4 text-blue-600" />
                          </div>
                          <p className="text-sm font-medium text-slate-600">Wallet Balance</p>
                        </div>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Withdraw</span>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900">₹{balance}</h4>
                    </div>
                  </button>

                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-sm font-bold text-slate-900 mb-3">Daily Challenges</p>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl mb-2">
                      <div className="flex items-center gap-3">
                        <Gift className="w-5 h-5 text-purple-500" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Watch Ad</p>
                          <p className="text-xs text-slate-500">Double rewards</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-full">Play</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-20 -left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Just earned</p>
                <p className="text-sm font-bold text-slate-900">₹50 UPI Transfer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-4">
              <p className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">Total Steps Walked</p>
              <p className="text-4xl md:text-5xl font-bold text-emerald-400">
                <Counter end={125000000} suffix="+" />
              </p>
            </div>
            <div className="p-4">
              <p className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">Total Rewards Paid</p>
              <p className="text-4xl md:text-5xl font-bold text-emerald-400">
                <Counter end={500000} prefix="₹" suffix="+" />
              </p>
            </div>
            <div className="p-4">
              <p className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">Active Users</p>
              <p className="text-4xl md:text-5xl font-bold text-emerald-400">
                <Counter end={25000} suffix="+" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Smart Tracking, Real Earnings</h2>
            <p className="text-lg text-slate-600">We've built a platform that accurately tracks your activity without draining your battery, ensuring fair rewards for everyone.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Battery className="w-6 h-6 text-blue-500" />}
              title="Battery-Friendly Pedometer"
              description="Syncs directly with Google Fit & Apple Health. No need to keep the app open, saving your battery life."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-emerald-500" />}
              title="Anti-Cheat System"
              description="Advanced algorithms detect fake shaking or GPS spoofing. Rewards are strictly for genuine physical activity."
            />
            <FeatureCard 
              icon={<Wallet className="w-6 h-6 text-purple-500" />}
              title="Instant UPI Withdrawals"
              description="Hit the minimum threshold of ₹100 and withdraw directly to your bank account via UPI instantly."
            />
            <FeatureCard 
              icon={<Gift className="w-6 h-6 text-rose-500" />}
              title="Hybrid Rewards"
              description="Watch short ads to double your daily steps, or upgrade to Pro for higher limits and an ad-free experience."
            />
            <FeatureCard 
              icon={<MapPin className="w-6 h-6 text-amber-500" />}
              title="Local Brand Challenges"
              description="Participate in sponsored challenges. Walk 10k steps and unlock a 20% discount at your local fitness store."
            />
            <FeatureCard 
              icon={<Smartphone className="w-6 h-6 text-indigo-500" />}
              title="In-App Marketplace"
              description="Spend your earned points on digital vouchers, fitness gear, or exclusive affiliate products directly in the app."
            />
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section id="community" className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/50 text-emerald-800 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Hyderabad & Telangana Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built for the local fitness community.</h2>
              <p className="text-lg text-slate-600 mb-6">
                We're partnering with local gyms, health food stores, and wellness brands across Hyderabad to bring you exclusive, hyper-local rewards.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Exclusive discounts at Jubilee Hills fitness centers",
                  "Vouchers for local healthy meal prep services",
                  "Community walking events at KBR Park"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552674605-15c2145efa38?auto=format&fit=crop&q=80&w=1000" 
                  alt="People walking in park" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-sm font-bold text-slate-900 mb-1">"Best fitness app in Hyd!"</p>
                <p className="text-sm text-slate-600">I earned enough for a free protein shake at my local gym just by walking to work.</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">- Rahul T., Madhapur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to make every step count?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Download the StridePay APK today and start earning rewards for your daily activity.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 mx-auto">
            <Download className="w-6 h-6" />
            Download APK (v1.0 Alpha)
          </button>
          <p className="text-slate-400 text-sm mt-6">Requires Android 8.0 or higher. iOS coming soon.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">StridePay</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm">
                Turn your daily steps into real rewards. We believe in incentivizing a healthier lifestyle through technology and community partnerships.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-emerald-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-600">Data Deletion</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-emerald-600">FAQ</a></li>
                <li><a href="#" className="hover:text-emerald-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-600">Report a Bug</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} StridePay. All rights reserved.
            </p>
            <p className="text-slate-400 text-xs text-center md:text-right max-w-xl">
              Disclaimer: StridePay operates as a fitness incentive and loyalty program. It is not a gambling or gaming application. Rewards are distributed based on verified physical activity in alignment with local regulations.
            </p>
          </div>
        </div>
      </footer>

      {/* Wallet Withdrawal Modal */}
      {isWalletOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button onClick={() => setIsWalletOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
               <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Withdraw to Bank</h2>
            <p className="text-slate-600 mb-6">Available Balance: <span className="font-bold text-emerald-600">₹{balance}</span></p>

            {withdrawState === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Transfer Successful!</h3>
                <p className="text-slate-600">₹{balance} has been initiated to your bank account.</p>
                <button onClick={() => { setIsWalletOpen(false); setWithdrawState('idle'); setSteps(0); }} className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-medium transition-colors">
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setWithdrawState('processing'); setTimeout(() => setWithdrawState('success'), 1500); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Account Holder Name</label>
                  <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Account Number</label>
                  <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Enter account number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">IFSC Code</label>
                  <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="e.g. SBIN000XXXX" />
                </div>
                <button disabled={withdrawState === 'processing' || parseFloat(balance) <= 0} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold transition-colors flex justify-center items-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                  {withdrawState === 'processing' ? 'Processing Transfer...' : `Transfer ₹${balance} to Bank`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all group">
      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
