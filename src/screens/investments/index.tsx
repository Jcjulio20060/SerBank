import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import { styles } from "./styles"; // Importa o arquivo de estilos

const colors = {
  primary: "#1A535C",
};

export default function InvestmentsScreen() {
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState(null);

  // Função para buscar dados de uma única ação da API Brapi
  const fetchInvestment = async () => {
    try {
      const response = await axios.get("https://brapi.dev/api/quote/PETR4?token=u9e4q6hhSfUoYq5rkejkrh");
      const stockData = response.data.results[0];

      // Define os dados da ação
      setStock(stockData);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados de investimentos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvestment();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investimentos</Text>
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : stock ? (
        <View style={styles.card}>
          <Image source={{ uri: stock.logourl }} style={styles.logo} />
          <Text style={styles.stockName}>{stock.longName}</Text>
          <Text style={styles.stockSymbol}>{stock.symbol}</Text>
          <Text style={styles.stockPrice}>
            Preço Atual: R$ {stock.regularMarketPrice.toFixed(2).replace(".", ",")}
          </Text>
          <Text
            style={[
              styles.stockChange,
              stock.regularMarketChange > 0 ? styles.positiveChange : styles.negativeChange,
            ]}
          >
            Variação: {stock.regularMarketChange.toFixed(2).replace(".", ",")} (
            {stock.regularMarketChangePercent.toFixed(2).replace(".", ",")}%)
          </Text>
        </View>
      ) : (
        <Text style={styles.errorText}>Não foi possível carregar os dados.</Text>
      )}
    </View>
  );
}