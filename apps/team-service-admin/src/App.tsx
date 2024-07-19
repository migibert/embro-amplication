import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { CollaboratorList } from "./collaborator/CollaboratorList";
import { CollaboratorCreate } from "./collaborator/CollaboratorCreate";
import { CollaboratorEdit } from "./collaborator/CollaboratorEdit";
import { CollaboratorShow } from "./collaborator/CollaboratorShow";
import { CollaboratorSkillList } from "./collaboratorSkill/CollaboratorSkillList";
import { CollaboratorSkillCreate } from "./collaboratorSkill/CollaboratorSkillCreate";
import { CollaboratorSkillEdit } from "./collaboratorSkill/CollaboratorSkillEdit";
import { CollaboratorSkillShow } from "./collaboratorSkill/CollaboratorSkillShow";
import { TeamSkillList } from "./teamSkill/TeamSkillList";
import { TeamSkillCreate } from "./teamSkill/TeamSkillCreate";
import { TeamSkillEdit } from "./teamSkill/TeamSkillEdit";
import { TeamSkillShow } from "./teamSkill/TeamSkillShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TeamService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Collaborator"
          list={CollaboratorList}
          edit={CollaboratorEdit}
          create={CollaboratorCreate}
          show={CollaboratorShow}
        />
        <Resource
          name="CollaboratorSkill"
          list={CollaboratorSkillList}
          edit={CollaboratorSkillEdit}
          create={CollaboratorSkillCreate}
          show={CollaboratorSkillShow}
        />
        <Resource
          name="TeamSkill"
          list={TeamSkillList}
          edit={TeamSkillEdit}
          create={TeamSkillCreate}
          show={TeamSkillShow}
        />
      </Admin>
    </div>
  );
};

export default App;
