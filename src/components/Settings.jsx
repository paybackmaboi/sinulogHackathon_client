import React from 'react';

const Settings = () => {
  return (
    <div className="flex flex-col h-full bg-[#f4f6f8] dark:bg-background-dark font-inter overflow-hidden relative">
      
      {/* Main Content Container - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24"> {/* Added padding bottom for sticky footer */}
        <div className="container mx-auto max-w-[1000px] px-6 py-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex mb-6">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-[#9db4b9] hover:text-slate-900 dark:hover:text-white" href="/owner-dashboard">
                  <span className="material-symbols-outlined text-[20px] mr-2">home</span>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-slate-400 text-sm mx-1">chevron_right</span>
                  <span className="text-sm font-medium text-slate-500 dark:text-[#9db4b9]">Settings</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-slate-400 text-sm mx-1">chevron_right</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">General Settings</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="flex flex-col gap-2 mb-10 border-b border-slate-200 dark:border-[#283639] pb-6">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">General Settings</h1>
            <p className="text-slate-500 dark:text-[#9db4b9]">Configure global application preferences, localization, and system details.</p>
          </div>

          {/* Form Content */}
          <form className="flex flex-col gap-8">
            
            {/* Section: Application Details */}
            <div className="bg-white dark:bg-[#111718] rounded-xl border border-slate-200 dark:border-[#283639] overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-[#283639] bg-slate-50 dark:bg-[#161e20]">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">domain</span>
                  Application Details
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="app_name">Application Name</label>
                    <input 
                      className="block w-full rounded-lg border-slate-300 dark:border-[#283639] bg-white dark:bg-[#1d2729] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2.5 outline-none focus:ring-1" 
                      id="app_name" 
                      name="app_name" 
                      type="text" 
                      defaultValue="EstateAdmin Pro"
                    />
                    <p className="text-xs text-slate-500 dark:text-[#7a9296]">Visible in the browser title bar and emails.</p>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="support_email">Support Email</label>
                    <input 
                      className="block w-full rounded-lg border-slate-300 dark:border-[#283639] bg-white dark:bg-[#1d2729] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2.5 outline-none focus:ring-1" 
                      id="support_email" 
                      name="support_email" 
                      type="email" 
                      defaultValue="support@estateadmin.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="about_description">Platform Description</label>
                  <textarea 
                    className="block w-full rounded-lg border-slate-300 dark:border-[#283639] bg-white dark:bg-[#1d2729] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2.5 outline-none focus:ring-1" 
                    id="about_description" 
                    rows="3"
                    defaultValue="The premier centralized platform for managing luxury real estate portfolios across the globe."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Section: Localization */}
            <div className="bg-white dark:bg-[#111718] rounded-xl border border-slate-200 dark:border-[#283639] overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-[#283639] bg-slate-50 dark:bg-[#161e20]">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">public</span>
                  Localization
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="timezone">Default Timezone</label>
                    <div className="relative">
                      <select className="block w-full rounded-lg border-slate-300 dark:border-[#283639] bg-white dark:bg-[#1d2729] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2.5 appearance-none outline-none focus:ring-1" id="timezone" name="timezone">
                        <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                        <option>(GMT+00:00) London</option>
                        <option>(GMT+01:00) Paris</option>
                        <option>(GMT+09:00) Tokyo</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="currency">Default Currency</label>
                    <div className="relative">
                      <select className="block w-full rounded-lg border-slate-300 dark:border-[#283639] bg-white dark:bg-[#1d2729] text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2.5 appearance-none outline-none focus:ring-1" id="currency" name="currency">
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                        <option>JPY (¥)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-[#1d2729] border border-slate-200 dark:border-[#283639]">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Auto-detect Location</p>
                    <p className="text-xs text-slate-500 dark:text-[#9db4b9]">Automatically set currency and language based on user IP.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Section: System Operations */}
            <div className="bg-white dark:bg-[#111718] rounded-xl border border-slate-200 dark:border-[#283639] overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-[#283639] bg-slate-50 dark:bg-[#161e20]">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">build</span>
                  System Operations
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Maintenance Mode</p>
                    <p className="text-xs text-slate-500 dark:text-[#9db4b9] mt-1">If enabled, the public-facing site will display a "Under Maintenance" page. Admin access remains unaffected.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="border-t border-slate-100 dark:border-[#283639] my-4"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Debug Logging</p>
                    <p className="text-xs text-slate-500 dark:text-[#9db4b9] mt-1">Enable verbose logging for troubleshooting system issues. Not recommended for production.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Sticky Action Footer */}
      <div className="absolute bottom-0 right-0 w-full bg-white dark:bg-[#111718] border-t border-slate-200 dark:border-[#283639] p-4 flex justify-between items-center z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-none">
        <div className="text-sm text-slate-500 dark:text-[#9db4b9] pl-4 hidden sm:block">
          <span className="material-symbols-outlined align-middle text-sm mr-1">info</span> Unsaved changes will be lost.
        </div>
        <div className="flex gap-4 pr-4 ml-auto">
          <button className="px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-white bg-white dark:bg-transparent border border-slate-300 dark:border-[#283639] rounded-lg hover:bg-slate-50 dark:hover:bg-[#1d2729] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors" type="button">
            Discard
          </button>
          <button className="px-6 py-2.5 text-sm font-medium text-black bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-primary/20 transition-all flex items-center gap-2" type="button">
            <span className="material-symbols-outlined text-sm">save</span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;