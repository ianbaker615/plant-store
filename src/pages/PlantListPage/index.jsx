import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import NavBar from "shared-components/NavBar";

const PlantListPage = () => {
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div>Plant List Page!!!</div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
