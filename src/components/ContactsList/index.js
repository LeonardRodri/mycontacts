import {
  Container, Header, ListContainer, Card,
} from './styles';
import arrow from '../../assets/images/arrow-up.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Leonardo Rodrigues</strong>
              <small>Instagram</small>
            </div>
            <span>rodriguespeixoto.1995@gmail.com</span>
            <span>(62) 9 82809718</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Leonardo Rodrigues</strong>
              <small>Instagram</small>
            </div>
            <span>rodriguespeixoto.1995@gmail.com</span>
            <span>(62) 9 82809718</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Leonardo Rodrigues</strong>
              <small>Instagram</small>
            </div>
            <span>rodriguespeixoto.1995@gmail.com</span>
            <span>(62) 9 82809718</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
