import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '~/components/repository';

import { 
  Container, Title, Form, Input, Submit, List, 
} from './styles';

export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#999" />
        </Submit>
      </Form>
      <List 
        keyboardSholdPersistTaps="handled"
        data={[
          {
            id: 1,
            name: "unform",
            description: "React JS teste ListView",
            stars: 1234,
            forks: 133,
          }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
            <Repository data={ item } />
        )}
      />

    </Container>
  );
}
