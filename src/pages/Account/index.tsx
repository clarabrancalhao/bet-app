import AccountSettingsCard from '../../components/AccountSettingsCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Wrapper } from './styles';

const Account = () => {
  return (
    <Wrapper>
      <Header page="account" />
      <AccountSettingsCard />
      <Footer />
    </Wrapper>
  );
};

export default Account;
