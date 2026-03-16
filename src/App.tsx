import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./components/main/homePage/HomePage";
import { ThemedMantineProvider } from "./contexts/ThemedMantineProvider";
import { UIModeProvider } from "./contexts/UIModeProvider";
import ListingPage from "./components/main/listingPage/ListingPage";
import DetailPage from "./components/main/detailPage/DetailPage";

const App = () => {
  return (
    <UIModeProvider>
      <ThemedMantineProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/listing" element={<ListingPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemedMantineProvider>
    </UIModeProvider>
  );
};

export default App;
