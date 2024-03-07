import React, { useState } from "react";
import styled from "styled-components";
import { IOSSwitch } from "./IosSwitch";
import SmallSelect from "./SmallSelect";
import BigSelect from "./BigSelect";
import SizeSelect from "./SizeSelect";

function App() {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [title, setTitle] = useState("");

  const handleChange = (e, itemName) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [itemName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <List>
          <Item>
            <CategoryTitle>Logement</CategoryTitle>
            <input
              type="text"
              placeholder="Enter title here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Item>
          <Category>
            <CategoryTitle>Cuisine</CategoryTitle>
            <ItemDiv>
              <Item>
                Boutons{" "}
                <SmallSelect
                  name="Boutons"
                  value={formData.Boutons || ""}
                  onChange={(e) => handleChange(e, "Boutons")}
                />
              </Item>
              <Separator />
              <Item>
                Comptoir{" "}
                <SmallSelect
                  name="Comptoir"
                  value={formData.Comptoir || ""}
                  onChange={(e) => handleChange(e, "Comptoir")}
                />
              </Item>
              <Separator />
              <Item>
                Enlever/replacer électro{" "}
                <IOSSwitch
                  name="EnleverElectro"
                  checked={formData.EnleverElectro || false}
                  onChange={(e) => handleChange(e, "EnleverElectro")}
                />
              </Item>
              <Separator />
              <Item>
                Facades{" "}
                <SmallSelect
                  name="Facades"
                  value={formData.Facades || ""}
                  onChange={(e) => handleChange(e, "Facades")}
                />
              </Item>
              <Separator />
              <Item>
                GFI{" "}
                <SmallSelect
                  name="GFI"
                  value={formData.GFI || ""}
                  onChange={(e) => handleChange(e, "GFI")}
                />
              </Item>
              <Separator />
              <Item>
                Hotte Cuisine{" "}
                <IOSSwitch
                  name="HotteCuisine"
                  checked={formData.HotteCuisine || false}
                  onChange={(e) => handleChange(e, "HotteCuisine")}
                />
              </Item>
              <Separator />
              <Item>
                Pré-reno{" "}
                <IOSSwitch
                  name="PreReno"
                  checked={formData.PreReno || false}
                  onChange={(e) => handleChange(e, "PreReno")}
                />
              </Item>
              <Separator />
              <Item>
                Portes{" "}
                <SmallSelect
                  name="Portes"
                  value={formData.Portes || ""}
                  onChange={(e) => handleChange(e, "Portes")}
                />
              </Item>
              <Separator />
              <Item>
                Peint Int. Armoire{" "}
                <IOSSwitch
                  name="PeintIntArmoire"
                  checked={formData.PeintIntArmoire || false}
                  onChange={(e) => handleChange(e, "PeintIntArmoire")}
                />
              </Item>
              <Separator />
              <Item>
                Peint Ext. Armoire{" "}
                <IOSSwitch
                  name="PeintExtArmoire"
                  checked={formData.PeintExtArmoire || false}
                  onChange={(e) => handleChange(e, "PeintExtArmoire")}
                />
              </Item>
              <Separator />
              <Item>
                Lumière{" "}
                <IOSSwitch
                  name="LumiereCuisine"
                  checked={formData.LumiereCuisine || false}
                  onChange={(e) => handleChange(e, "LumiereCuisine")}
                />
              </Item>
              <Separator />
              <Item>
                Lavabo{" "}
                <IOSSwitch
                  name="Lavabo"
                  checked={formData.Lavabo || false}
                  onChange={(e) => handleChange(e, "Lavabo")}
                />
              </Item>
              <Separator />
              <Item>
                Latte de transition{" "}
                <SmallSelect
                  name="LatteTransition"
                  value={formData.LatteTransition || ""}
                  onChange={(e) => handleChange(e, "LatteTransition")}
                />
              </Item>
              <Separator />
              <Item>
                Robinet{" "}
                <IOSSwitch
                  name="Robinet"
                  checked={formData.Robinet || false}
                  onChange={(e) => handleChange(e, "Robinet")}
                />
              </Item>
              <Separator />
              <Item>
                Plomberie{" "}
                <IOSSwitch
                  name="Plomberie"
                  checked={formData.Plomberie || false}
                  onChange={(e) => handleChange(e, "Plomberie")}
                />
              </Item>
              <Separator />
              <Item>
                Valve 1/2{" "}
                <SmallSelect
                  name="Valve12"
                  value={formData.Valve12 || ""}
                  onChange={(e) => handleChange(e, "Valve12")}
                />
              </Item>
              <Separator />
              <Item>
                Valve 3/8{" "}
                <SmallSelect
                  name="Valve38"
                  value={formData.Valve38 || ""}
                  onChange={(e) => handleChange(e, "Valve38")}
                />
              </Item>
              <Separator />
            </ItemDiv>
          </Category>
          <Category>
            <CategoryTitle>Salle de Bains</CategoryTitle>
            <ItemDiv>
              <Item>
                Toilette{" "}
                <IOSSwitch
                  name="Toilette"
                  checked={formData.Toilette || false}
                  onChange={(e) => handleChange(e, "Toilette")}
                />
              </Item>
              <Separator />
              <Item>
                Décappage/émaillage Bain{" "}
                <IOSSwitch
                  name="DecappageBain"
                  checked={formData.DecappageBain || false}
                  onChange={(e) => handleChange(e, "DecappageBain")}
                />
              </Item>
              <Separator />
              <Item>
                Robinet{" "}
                <IOSSwitch
                  name="RobinetSDB"
                  checked={formData.RobinetSDB || false}
                  onChange={(e) => handleChange(e, "RobinetSDB")}
                />
              </Item>
              <Separator />
              <Item>
                Lavabo{" "}
                <IOSSwitch
                  name="LavaboSDB"
                  checked={formData.LavaboSDB || false}
                  onChange={(e) => handleChange(e, "LavaboSDB")}
                />
              </Item>
              <Separator />
              <Item>
                Pharmacie{" "}
                <IOSSwitch
                  name="Pharmacie"
                  checked={formData.Pharmacie || false}
                  onChange={(e) => handleChange(e, "Pharmacie")}
                />
              </Item>
              <Separator />
              <Item>
                Mirroir{" "}
                <IOSSwitch
                  name="Mirroir"
                  checked={formData.Mirroir || false}
                  onChange={(e) => handleChange(e, "Mirroir")}
                />
              </Item>
              <Separator />
              <Item>
                Enlever lampe chauffante{" "}
                <IOSSwitch
                  name="EnleverLampeChauffante"
                  checked={formData.EnleverLampeChauffante || false}
                  onChange={(e) => handleChange(e, "EnleverLampeChauffante")}
                />
              </Item>
              <Separator />
              <Item>
                Barre Serviette{" "}
                <IOSSwitch
                  name="BarreServiette"
                  checked={formData.BarreServiette || false}
                  onChange={(e) => handleChange(e, "BarreServiette")}
                />
              </Item>
              <Separator />
              <Item>
                Tête de douche{" "}
                <IOSSwitch
                  name="TeteDouche"
                  checked={formData.TeteDouche || false}
                  onChange={(e) => handleChange(e, "TeteDouche")}
                />
              </Item>
              <Separator />
              <Item>
                Ajustement Silicone{" "}
                <IOSSwitch
                  name="AjustementSilicone"
                  checked={formData.AjustementSilicone || false}
                  onChange={(e) => handleChange(e, "AjustementSilicone")}
                />
              </Item>
              <Separator />
              <Item>
                Silicone{" "}
                <SmallSelect
                  name="Silicone"
                  value={formData.Silicone || ""}
                  onChange={(e) => handleChange(e, "Silicone")}
                />
              </Item>
              <Separator />
              <Item>
                HVAC{" "}
                <IOSSwitch
                  name="HVAC"
                  checked={formData.HVAC || false}
                  onChange={(e) => handleChange(e, "HVAC")}
                />
              </Item>
              <Separator />
              <Item>
                Lumière{" "}
                <IOSSwitch
                  name="LumiereSDB"
                  checked={formData.LumiereSDB || false}
                  onChange={(e) => handleChange(e, "LumiereSDB")}
                />
              </Item>
              <Separator />
              <Item>
                All Inclusive{" "}
                <IOSSwitch
                  name="AllInclusive"
                  checked={formData.AllInclusive || false}
                  onChange={(e) => handleChange(e, "AllInclusive")}
                />
              </Item>
              <Separator />
              <Item>
                Tuile{" "}
                <SmallSelect
                  name="Tuile"
                  value={formData.Tuile || ""}
                  onChange={(e) => handleChange(e, "Tuile")}
                />
              </Item>
              <Separator />
              <Item>
                Plomberie SDB{" "}
                <IOSSwitch
                  name="PlomberieSDB"
                  checked={formData.PlomberieSDB || false}
                  onChange={(e) => handleChange(e, "PlomberieSDB")}
                />
              </Item>
              <Separator />
            </ItemDiv>
          </Category>
          <Category>
            <CategoryTitle>Misc</CategoryTitle>
            <ItemDiv>
              <Item>
                Plâtre{" "}
                <BigSelect
                  name="Platre"
                  value={formData.Platre || ""}
                  onChange={(e) => handleChange(e, "Platre")}
                />
              </Item>
              <Separator />
              <Item>
                Démo Plancher{" "}
                <SizeSelect
                  name="DemoPlancher"
                  value={formData.DemoPlancher || ""}
                  onChange={(e) => handleChange(e, "DemoPlancher")}
                />
              </Item>
              <Separator />
              <Item>
                Sabler/Vernir{" "}
                <SizeSelect
                  name="SablerVernir"
                  value={formData.SablerVernir || ""}
                  onChange={(e) => handleChange(e, "SablerVernir")}
                />
              </Item>
              <Separator />
              <Item>
                Peinture (1ère){" "}
                <SizeSelect
                  name="Peinture1"
                  value={formData.Peinture1 || ""}
                  onChange={(e) => handleChange(e, "Peinture1")}
                />
              </Item>
              <Separator />
              <Item>
                Peinture (2e){" "}
                <SizeSelect
                  name="Peinture2"
                  value={formData.Peinture2 || ""}
                  onChange={(e) => handleChange(e, "Peinture2")}
                />
              </Item>
              <Separator />
              <Item>
                Peinture (Plafond){" "}
                <SizeSelect
                  name="PeinturePlafond"
                  value={formData.PeinturePlafond || ""}
                  onChange={(e) => handleChange(e, "PeinturePlafond")}
                />
              </Item>
              <Separator />
              <Item>
                Ajustement Porte{" "}
                <IOSSwitch
                  name="AjustementPorte"
                  checked={formData.AjustementPorte || false}
                  onChange={(e) => handleChange(e, "AjustementPorte")}
                />
              </Item>
              <Separator />
              <Item>
                Ajustement Fenêtre{" "}
                <IOSSwitch
                  name="AjustementFenetre"
                  checked={formData.AjustementFenetre || false}
                  onChange={(e) => handleChange(e, "AjustementFenetre")}
                />
              </Item>
              <Separator />
              <Item>
                Lumière{" "}
                <IOSSwitch
                  name="LumiereMisc"
                  checked={formData.LumiereMisc || false}
                  onChange={(e) => handleChange(e, "LumiereMisc")}
                />
              </Item>
              <Separator />
              <Item>
                Prises{" "}
                <SmallSelect
                  name="Prises"
                  value={formData.Prises || ""}
                  onChange={(e) => handleChange(e, "Prises")}
                />
              </Item>
              <Separator />
              <Item>
                Nettoyage{" "}
                <SizeSelect
                  name="Nettoyage"
                  value={formData.Nettoyage || ""}
                  onChange={(e) => handleChange(e, "Nettoyage")}
                />
              </Item>
              <Separator />
            </ItemDiv>
          </Category>
          <SubmitDiv>
            <SubmitButton type="submit">Submit</SubmitButton>
          </SubmitDiv>
        </List>
      </form>

      {submittedData && (
        <div>
          <h2>{title || "Submitted Data"}</h2>
          {Object.entries(submittedData).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

const List = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
  background: rgb(206, 200, 223);
  background: -moz-radial-gradient(
    circle,
    rgba(206, 200, 223, 1) 0%,
    rgba(217, 148, 255, 1) 52%,
    rgba(180, 205, 235, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(206, 200, 223, 1) 0%,
    rgba(217, 148, 255, 1) 52%,
    rgba(180, 205, 235, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(206, 200, 223, 1) 0%,
    rgba(217, 148, 255, 1) 52%,
    rgba(180, 205, 235, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#cec8df",endColorstr="#b4cdeb",GradientType=1);
`;

const Category = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h2`
  margin-left: 2vh;
  margin-right: 2vh;
  font-size: 4vh;
  font-family: "Gilroy-Light", sans-serif;
`;

const ItemDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  display: flex;
`;

const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding-left: 3vh;
  padding-right: 3vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  border-radius: 2vh;
  font-family: "Gilroy-Bold", sans-serif;
`;
const Item = styled.p`
  font-size: 3vh;
  margin-left: 3vh;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding-left: 3vh;
  padding-right: 3vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  align-items: center;
  font-family: "Gilroy-Bold", sans-serif;
  display: flex;
  margin-right: 3vh;
`;

const Separator = styled.div`
  border-bottom: 1px solid black;
  margin-left: 2vh;
  margin-right: 2vh;
`;

export default App;
