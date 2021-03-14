module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
            args[0].title = 'Vue Portfolio';
                return args;
            });
    },
    pwa: {
      themeColor: "#130f40",
      msTileColor: "#130f40",
      name: "Vue Portfolio",
      manifestOptions: {
        icons: [
            {
              src: "./img/windows10/Square71x71Logo.scale-400.png",
              sizes: "284x284",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square71x71Logo.scale-200.png",
              sizes: "142x142",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square71x71Logo.scale-100.png",
              sizes: "71x71",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square71x71Logo.scale-150.png",
              sizes: "107x107",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square71x71Logo.scale-125.png",
              sizes: "89x89",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square150x150Logo.scale-400.png",
              sizes: "600x600",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square150x150Logo.scale-200.png",
              sizes: "300x300",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square150x150Logo.scale-100.png",
              sizes: "150x150",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square150x150Logo.scale-150.png",
              sizes: "225x225",
              type: "image/png"
            },
            {
              src: "./img/windows10/Square150x150Logo.scale-125.png",
              sizes: "188x188"
            },
            {
              src: "./img/windows10/Wide310x150Logo.scale-400.png",
              sizes: "1240x600"
            },
            {
              src: "./img/windows10/Wide310x150Logo.scale-200.png",
              sizes: "620x300"
            },
            {
              src: "./img/windows10/Wide310x150Logo.scale-100.png",
              sizes: "310x150"
            },
            {
              src: "./img/windows10/Wide310x150Logo.scale-150.png",
              sizes: "465x225"
            },
            {
              src: "./img/windows10/Wide310x150Logo.scale-125.png",
              sizes: "388x188"
            },
            {
              src: "./img/windows10/Square310x310Logo.scale-400.png",
              sizes: "1240x1240"
            },
            {
              src: "./img/windows10/Square310x310Logo.scale-200.png",
              sizes: "620x620"
            },
            {
              src: "./img/windows10/Square310x310Logo.scale-100.png",
              sizes: "310x310"
            },
            {
              src: "./img/windows10/Square310x310Logo.scale-150.png",
              sizes: "465x465"
            },
            {
              src: "./img/windows10/Square310x310Logo.scale-125.png",
              sizes: "388x388",
              type: "image/png",
            purpose: "maskable"
            },
            {
              src: "./img/windows10/Square44x44Logo.scale-400.png",
              sizes: "176x176"
            },
            {
              src: "./img/windows10/Square44x44Logo.scale-200.png",
              sizes: "88x88"
            },
            {
              src: "./img/windows10/Square44x44Logo.scale-100.png",
              sizes: "44x44"
            },
            {
              src: "./img/windows10/Square44x44Logo.scale-150.png",
              sizes: "66x66"
            },
            {
              src: "./img/windows10/Square44x44Logo.scale-125.png",
              sizes: "55x55"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-256.png",
              sizes: "256x256"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-48.png",
              sizes: "48x48"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-32.png",
              sizes: "32x32"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-24.png",
              sizes: "24x24"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-16.png",
              sizes: "16x16"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-256_altform-unplated.png",
              sizes: "256x256"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-48_altform-unplated.png",
              sizes: "48x48"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-44_altform-unplated.png",
              sizes: "44x44"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-32_altform-unplated.png",
              sizes: "32x32"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-24_altform-unplated.png",
              sizes: "24x24"
            },
            {
              src: "./img/windows10/Square44x44Logo.targetsize-16_altform-unplated.png",
              sizes: "16x16"
            },
            {
              src: "./img/windows10/StoreLogo.scale-400.png",
              sizes: "200x200"
            },
            {
              src: "./img/windows10/StoreLogo.scale-200.png",
              sizes: "100x100"
            },
            {
              src: "./img/windows10/StoreLogo.scale-150.png",
              sizes: "75x75"
            },
            {
              src: "./img/windows10/StoreLogo.scale-125.png",
              sizes: "63x63"
            },
            {
              src: "./img/windows10/StoreLogo.scale-100.png",
              sizes: "50x50"
            },
            {
              src: "./img/windows10/StoreLogo.png",
              sizes: "50x50"
            },
            {
              src: "./img/windows10/SplashScreen.scale-400.png",
              sizes: "2480x1200"
            },
            {
              src: "./img/windows10/SplashScreen.scale-200.png",
              sizes: "1240x600"
            },
            {
              src: "./img/windows10/SplashScreen.scale-150.png",
              sizes: "930x450"
            },
            {
              src: "./img/windows10/SplashScreen.scale-125.png",
              sizes: "775x375"
            },
            {
              src: "./img/windows10/SplashScreen.scale-100.png",
              sizes: "620x300"
            },
            {
              src: "./img/windows/windows-smallsquare-24-24.png",
              sizes: "24x24"
            },
            {
              src: "./img/windows/windows-smallsquare-30-30.png",
              sizes: "30x30"
            },
            {
              src: "./img/windows/windows-smallsquare-42-42.png",
              sizes: "42x42"
            },
            {
              src: "./img/windows/windows-smallsquare-54-54.png",
              sizes: "54x54"
            },
            {
              src: "./img/windows/windows-splashscreen-1116-540.png",
              sizes: "1116x540"
            },
            {
              src: "./img/windows/windows-splashscreen-868-420.png",
              sizes: "868x420"
            },
            {
              src: "./img/windows/windows-splashscreen-620-300.png",
              sizes: "620x300"
            },
            {
              src: "./img/windows/windows-squarelogo-270-270.png",
              sizes: "270x270"
            },
            {
              src: "./img/windows/windows-squarelogo-210-210.png",
              sizes: "210x210"
            },
            {
              src: "./img/windows/windows-squarelogo-150-150.png",
              sizes: "150x150"
            },
            {
              src: "./img/windows/windows-squarelogo-120-120.png",
              sizes: "120x120"
            },
            {
              src: "./img/windows/windows-storelogo-90-90.png",
              sizes: "90x90"
            },
            {
              src: "./img/windows/windows-storelogo-70-70.png",
              sizes: "70x70"
            },
            {
              src: "./img/windows/windows-storelogo-50-50.png",
              sizes: "50x50"
            },
            {
              src: "./img/windows/windowsphone-appicon-106-106.png",
              sizes: "106x106"
            },
            {
              src: "./img/windows/windowsphone-appicon-62-62.png",
              sizes: "62x62"
            },
            {
              src: "./img/windows/windowsphone-appicon-44-44.png",
              sizes: "44x44"
            },
            {
              src: "./img/windows/windowsphone-mediumtile-360-360.png",
              sizes: "360x360"
            },
            {
              src: "./img/windows/windowsphone-mediumtile-210-210.png",
              sizes: "210x210"
            },
            {
              src: "./img/windows/windowsphone-mediumtile-150-150.png",
              sizes: "150x150"
            },
            {
              src: "./img/windows/windowsphone-smalltile-170-170.png",
              sizes: "170x170"
            },
            {
              src: "./img/windows/windowsphone-smalltile-99-99.png",
              sizes: "99x99"
            },
            {
              src: "./img/windows/windowsphone-smalltile-71-71.png",
              sizes: "71x71"
            },
            {
              src: "./img/windows/windowsphone-storelogo-120-120.png",
              sizes: "120x120"
            },
            {
              src: "./img/windows/windowsphone-storelogo-70-70.png",
              sizes: "70x70"
            },
            {
              src: "./img/windows/windowsphone-storelogo-50-50.png",
              sizes: "50x50"
            },
            {
              src: "./img/msteams/msteams-192-192.png",
              sizes: "192x192"
            },
            {
              src: "./img/msteams/msteams-silhouette-32-32.png",
              sizes: "32x32"
            },
            {
              src: "./img/android/android-launchericon-512-512.png",
              sizes: "512x512"
            },
            {
              src: "./img/android/android-launchericon-192-192.png",
              sizes: "192x192"
            },
            {
              src: "./img/android/android-launchericon-144-144.png",
              sizes: "144x144"
            },
            {
              src: "./img/android/android-launchericon-96-96.png",
              sizes: "96x96"
            },
            {
              src: "./img/android/android-launchericon-72-72.png",
              sizes: "72x72"
            },
            {
              src: "./img/android/android-launchericon-48-48.png",
              sizes: "48x48"
            },
            {
              src: "./img/chrome/chrome-extensionmanagementpage-48-48.png",
              sizes: "48x48"
            },
            {
              src: "./img/chrome/chrome-favicon-16-16.png",
              sizes: "16x16"
            },
            {
              src: "./img/chrome/chrome-installprocess-128-128.png",
              sizes: "128x128"
            },
            {
              src: "./img/firefox/firefox-marketplace-512-512.png",
              sizes: "512x512"
            },
            {
              src: "./img/firefox/firefox-marketplace-128-128.png",
              sizes: "128x128"
            },
            {
              src: "./img/firefox/firefox-general-256-256.png",
              sizes: "256x256"
            },
            {
              src: "./img/firefox/firefox-general-128-128.png",
              sizes: "128x128"
            },
            {
              src: "./img/firefox/firefox-general-90-90.png",
              sizes: "90x90"
            },
            {
              src: "./img/firefox/firefox-general-64-64.png",
              sizes: "64x64"
            },
            {
              src: "./img/firefox/firefox-general-48-48.png",
              sizes: "48x48"
            },
            {
              src: "./img/firefox/firefox-general-32-32.png",
              sizes: "32x32"
            },
            {
              src: "./img/firefox/firefox-general-16-16.png",
              sizes: "16x16"
            }
          ],
      },
    },
  };