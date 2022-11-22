import React, { useEffect } from "react"
import { Text } from "react-native";
import { useQuery } from "react-query";
import api from "../../service/http/api";
import { Container } from "./styles";


export default function Dashboard() {

  const { data: dataSource } = useQuery('getDataSource', async () => {
    const { data } = await api.get('datasource');
    return data;
  })


  return (
    <Container>
      <Text>Teste</Text>
    </Container>
  )
}