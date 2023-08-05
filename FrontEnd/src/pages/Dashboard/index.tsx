import { Card } from "../../components/card";
import {  Container } from "./style";

export interface Contact {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

export const Dashboard = () => {
  
  
  return (
    <>
      <Container>
        <header>
          <h2>DashBoard</h2>
        </header>
        
        <main>
          <Card/>
        </main>
      </Container>
    </>
  );
};


