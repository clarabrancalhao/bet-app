import ChangePasswordCard from '../../components/ChangePasswordCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Wrapper } from './styles';

const Account = () => {
  return (
    <Wrapper>
      <Header page="account" />
      <ChangePasswordCard />
      <Footer />
    </Wrapper>
  );
};

export default Account;
