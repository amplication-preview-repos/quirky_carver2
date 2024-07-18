import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { SubcategoryList } from "./subcategory/SubcategoryList";
import { SubcategoryCreate } from "./subcategory/SubcategoryCreate";
import { SubcategoryEdit } from "./subcategory/SubcategoryEdit";
import { SubcategoryShow } from "./subcategory/SubcategoryShow";
import { RecommendationList } from "./recommendation/RecommendationList";
import { RecommendationCreate } from "./recommendation/RecommendationCreate";
import { RecommendationEdit } from "./recommendation/RecommendationEdit";
import { RecommendationShow } from "./recommendation/RecommendationShow";
import { SubSubcategoryList } from "./subSubcategory/SubSubcategoryList";
import { SubSubcategoryCreate } from "./subSubcategory/SubSubcategoryCreate";
import { SubSubcategoryEdit } from "./subSubcategory/SubSubcategoryEdit";
import { SubSubcategoryShow } from "./subSubcategory/SubSubcategoryShow";
import { SearchInputList } from "./searchInput/SearchInputList";
import { SearchInputCreate } from "./searchInput/SearchInputCreate";
import { SearchInputEdit } from "./searchInput/SearchInputEdit";
import { SearchInputShow } from "./searchInput/SearchInputShow";
import { PlaceList } from "./place/PlaceList";
import { PlaceCreate } from "./place/PlaceCreate";
import { PlaceEdit } from "./place/PlaceEdit";
import { PlaceShow } from "./place/PlaceShow";
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
        title={"Information/Insights Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Subcategory"
          list={SubcategoryList}
          edit={SubcategoryEdit}
          create={SubcategoryCreate}
          show={SubcategoryShow}
        />
        <Resource
          name="Recommendation"
          list={RecommendationList}
          edit={RecommendationEdit}
          create={RecommendationCreate}
          show={RecommendationShow}
        />
        <Resource
          name="SubSubcategory"
          list={SubSubcategoryList}
          edit={SubSubcategoryEdit}
          create={SubSubcategoryCreate}
          show={SubSubcategoryShow}
        />
        <Resource
          name="SearchInput"
          list={SearchInputList}
          edit={SearchInputEdit}
          create={SearchInputCreate}
          show={SearchInputShow}
        />
        <Resource
          name="Place"
          list={PlaceList}
          edit={PlaceEdit}
          create={PlaceCreate}
          show={PlaceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
