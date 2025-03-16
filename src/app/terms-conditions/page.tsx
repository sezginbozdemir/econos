"use client";
import { Container, List, Stack, Text } from "@mantine/core";

const Terms = () => {
  return (
    <Container w="100%" size={1200}>
      <Stack gap={100} align="center">
        <h2>Termeni și Condiții</h2>
        <Stack gap={50}>
          <Stack>
            <h4>Ultima actualizare: [Data]</h4>
            <Text className="body-text">
              Bine ați venit pe site-ul Econos, o firmă de consultanță
              financiară și contabilitate care oferă servicii personalizate și
              soluții de gestionare financiară. Utilizarea site-ului nostru și a
              serviciilor noastre este supusă următorilor termeni și condiții.
              Vă rugăm să citiți cu atenție aceste informații înainte de a
              utiliza serviciile noastre.
            </Text>
          </Stack>
          <Stack>
            <h3>1. Acceptarea Termenilor și Condițiilor</h3>
            <Text className="body-text">
              Prin accesarea și utilizarea site-ului [www.econos.ro] și/sau a
              serviciilor oferite de Econos, sunteți de acord să respectați și
              să acceptați termenii și condițiile stabilite aici. Dacă nu
              sunteți de acord cu acești termeni, vă rugăm să nu utilizați
              site-ul sau serviciile noastre.
            </Text>
          </Stack>
          <Stack>
            <h3>2. Definiții</h3>
            <Stack>
              <Text className="body-text">
                Econos: Firma de consultanță financiară și contabilitate care
                furnizează servicii profesionale de contabilitate, consultanță
                fiscală și financiară.
              </Text>
              <Text className="body-text">
                Client: Persoana fizică sau juridică care utilizează serviciile
                oferite de Econos.{" "}
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <h3>3. Descrierea Serviciilor</h3>
            <Stack>
              <Text className="body-text">
                Econos oferă o gamă variată de servicii financiare și contabile,
                inclusiv, dar fără a se limita la:
              </Text>
              <List className="body-text">
                <List.Item>Optimizare Fiscală</List.Item>
                <List.Item>Contabilitate/Evidență Contabilă</List.Item>
                <List.Item>Expertize Contabile</List.Item>
                <List.Item>Finanțări</List.Item>
                <List.Item>Fonduri Nerambursabile</List.Item>
              </List>
              <Text className="body-text">
                Serviciile sunt personalizate în funcție de nevoile și cerințele
                fiecărui client. Detaliile și condițiile specifice fiecărui
                serviciu vor fi stabilite în contractele individuale încheiate
                cu clienții noștri.
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <h3>4. Confidențialitate și Protecția Datelor</h3>
            <Text className="body-text">
              Econos respectă confidențialitatea clienților săi și se angajează
              să protejeze informațiile personale și financiare ale acestora.
              Politica noastră de confidențialitate, disponibilă [aici - link
              spre politica de confidențialitate], descrie modul în care
              colectăm, folosim și protejăm datele dumneavoastră personale.
            </Text>
          </Stack>
          <Stack>
            <h3>5. Obligațiile Clientului</h3>
            <Text className="body-text">
              Clientul este responsabil de furnizarea corectă și completă a
              tuturor informațiilor necesare pentru prestarea serviciilor. Orice
              eroare sau lipsă de informație poate afecta calitatea serviciilor
              oferite de Econos, iar firma nu își asumă răspunderea pentru
              pierderi cauzate de informații incomplete sau inexacte furnizate
              de client.
            </Text>
          </Stack>
          <Stack>
            <h3>6. Limitarea Răspunderii</h3>
            <Stack>
              <Text className="body-text">
                Econos nu va fi răspunzătoare pentru:
              </Text>
              <List className="body-text">
                <List.Item>
                  Pierderi sau daune indirecte, incidentale sau rezultate,
                  apărute din utilizarea serviciilor sale.
                </List.Item>
                <List.Item>
                  Orice eroare sau omisiune în furnizarea serviciilor, dacă
                  acestea se datorează unor informații incorecte oferite de
                  client.
                </List.Item>
                <List.Item>
                  Întârzierea sau imposibilitatea furnizării serviciilor cauzată
                  de factori externi, cum ar fi probleme tehnice, cazuri de
                  forță majoră etc.
                </List.Item>
              </List>
            </Stack>
          </Stack>
          <Stack>
            <h3>7. Drepturi de Proprietate Intelectuală</h3>
            <Text className="body-text">
              Toate materialele, documentația, rapoartele și analizele oferite
              de Econos sunt protejate de drepturile de autor și nu pot fi
              reproduse, distribuite sau utilizate fără acordul scris prealabil
              al Econos.
            </Text>
          </Stack>
          <Stack>
            <h3>8. Modificări ale Termenilor și Condițiilor</h3>
            <Text className="body-text">
              Econos își rezervă dreptul de a modifica termenii și condițiile de
              utilizare a site-ului și a serviciilor, oricând consideră necesar.
              Vă recomandăm să verificați această pagină periodic pentru a fi la
              curent cu eventualele modificări.
            </Text>
          </Stack>
          <Stack>
            <h3>9. Legea Aplicabilă și Jurisdicția</h3>
            <Text className="body-text">
              Acești termeni și condiții sunt guvernați de legislația din
              România. Orice dispută care ar putea apărea în legătură cu acești
              termeni va fi soluționată de instanțele competente din România.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Terms;
