import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#111418] border-t border-[#f0f2f4] dark:border-[#293038] py-12 px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 cursor-pointer select-none">
              <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">apartment</span>
              </div>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold">GO4thBook</h2>
            </div>
            <p className="text-[#617589] dark:text-gray-400 text-sm">
              Building the future of travel and living. One property at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#111418] dark:text-white mb-4">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#617589] dark:text-gray-400">
              <li><a className="hover:text-primary" href="#">About Us</a></li>
              <li><a className="hover:text-primary" href="#">Careers</a></li>
              <li><a className="hover:text-primary" href="#">Blog</a></li>
              <li><a className="hover:text-primary" href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#111418] dark:text-white mb-4">Support</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#617589] dark:text-gray-400">
              <li><a className="hover:text-primary" href="#">Help Center</a></li>
              <li><a className="hover:text-primary" href="#">Safety</a></li>
              <li><a className="hover:text-primary" href="#">Cancellation</a></li>
              <li><a className="hover:text-primary" href="#">Report Issue</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#111418] dark:text-white mb-4">Hosting</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#617589] dark:text-gray-400">
              <li><a className="hover:text-primary" href="#">List your home</a></li>
              <li><a className="hover:text-primary" href="#">Host Resources</a></li>
              <li><a className="hover:text-primary" href="#">Community</a></li>
              <li><a className="hover:text-primary" href="#">Insurance</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#f0f2f4] dark:border-[#293038] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#617589] dark:text-gray-500">© 2023 GO4th Inc. All rights reserved.</p>
          <div className="flex gap-6 text-[#617589] dark:text-gray-500">
            <a className="hover:text-primary" href="#"><span class="material-symbols-outlined">public</span></a>
            <a className="hover:text-primary" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
            <a className="hover:text-primary" href="#"><span class="material-symbols-outlined">rss_feed</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;