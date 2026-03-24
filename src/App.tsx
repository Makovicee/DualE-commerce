import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./components/main/homePage/HomePage";
import { ThemedMantineProvider } from "./contexts/ThemedMantineProvider";
import { UIModeProvider } from "./contexts/UIModeProvider";
import ListingPage from "./components/main/listingPage/ListingPage";
import DetailPage from "./components/main/detailPage/DetailPage";
import CheckoutPage from "./components/main/checkoutPage/CheckoutPage";
import { CartProvider } from "./core/CartProvider";

const App = () => {
  return (
    <UIModeProvider>
      <ThemedMantineProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/listing/:category?" element={<ListingPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ThemedMantineProvider>
    </UIModeProvider>
  );
};

export default App;
