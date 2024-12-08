import { component$, useSignal, $ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { isDev } from "@builder.io/qwik/build";
import Navigation from "./components/Navigation";
import { Main } from "./components/Main";
import { Contact } from "./components/Contact";
import "./global.css";
import { Footer } from "./components/Footer";
import { Expertise } from "./components/Expertise";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  const mode = useSignal<string>('dark')

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <div class={`main-container ${mode.value === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          <Navigation mode={ mode.value } onModeChange$={$(() => (mode.value = mode.value == 'dark' ? 'light' : 'dark'))} />
          <Main/>
          <Expertise/>
          <Contact />
          <Footer/>
        </div>
        {/* <RouterOutlet /> */}
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
