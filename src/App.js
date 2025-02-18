import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PokemonList from "./pages/PokemonList";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NewestPokemon from "./pages/NewestPokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="newest-pokemon" element={<NewestPokemon/>} />
            <Route path="pokemon-list" element={<PokemonList />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
