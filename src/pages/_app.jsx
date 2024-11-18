import React from "react"; // React imports
import { Provider } from "react-redux"; // Redux provider
import { wrapper } from "@/store"; // Redux store setup
import "../.././global.css"
import Layout from "@/components/layout/Index";

const App = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps); // Use only pageProps once
  return (
    <Provider store={store}> {/* Wrapping the app with the Redux Provider */}
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default wrapper.withRedux(App); // Using Redux wrapper to wrap the App component
