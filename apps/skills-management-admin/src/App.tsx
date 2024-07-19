import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
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
        title={"Skills Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
