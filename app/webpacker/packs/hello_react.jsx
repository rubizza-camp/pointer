import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render() {
    return (
    <div className="header">
      <div className="top_header">
        <div className="container">
          <div className="top_header__contacts">
            <p>Телефон для связи:</p><a href="#">+375(25)5729105</a>
          </div>
        </div>
      </div>
      <div className="low_header">
        <div className="container">
          <div className="low_header__logo">
            <a href="#">Pointer</a>
          </div>
          <div className="low_header__menu">
            <a href="#">О нас</a>
            <a href="#">Выгульщики</a>
            <a href="#">Работа</a>
            <a href="#">Отзывы</a>
            <a href="#">Контакты</a>
            <a href="#" class="green_link log_in">Вход</a>
            <a href="#" class="green_link">Регистрация</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="banner__image">
            <img src={require(`../images/banner.svg`)} />
            </div>
            <div className="banner__text">
              <p class="banner_title__low">Забота</p>
              <p class="banner_title__medium">О тех, кто вам важен</p>
              <p class="banner_title__simple">Профессиональный выгул,<br/> няня, передержка собак в Минске</p>
              <div className="banner__button">
                <a href="#">Подробнее</a>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

class Request extends React.Component {
  render() {
    return (
      <div className="request">
        <div className="container">
        <div className ="request_text">
          <div className ="request_title">
            <p>Оформите заявку в несколько кликов</p>
          </div>
          <div className="request__body">
          <p>Если вы уже наш клиент или просто хотите быстро оформить заявку, эта кнопка для вас</p>
          </div>
          <div className="request__button">
            <a href="#">Заказать</a>
          </div>
        </div>
        <div className="request__image">
          <img src={require(`../images/walk.jpg`)} />
        </div>
        </div>
      </div>
    );
  }
}

class Questions extends React.Component {
  render() {
    return (
      <div className="questions">
        <div className="container">
        <div className="body_title">Часто задаваемые вопросы</div>
          <div className="questions_common">
            <div className="questions_common__item" data-toggle="collapse" data-target="#el01">
              <a>Зачем я завел собаку?</a>
              <div className="open">
                <p>></p>
              </div>
            </div>
            <div className="ansver">
              <div id="el01" class="collapse">Hello</div>
            </div>
            <div className="questions_common__item" data-toggle="collapse" data-target="#el02">
              <a>Зачем я завел собаку?</a>
              <div className="open">
                <p>></p>
              </div>
            </div>
            <div className="ansver">
              <div id="el02" class="collapse">Hello</div>
            </div>
            <div className="questions_common__item" data-toggle="collapse" data-target="#el02">
              <a>Зачем я завел собаку?</a>
              <div className="open">
                <p>></p>
              </div>
            </div>
            <div className="ansver">
              <div id="el2" class="collapse">Hello</div>
            </div>
            <div className="questions_common__item" data-toggle="collapse" data-target="#el03">
              <a>Зачем я завел собаку?</a>
              <div className="open">
                <p>></p>
              </div>
            </div>
            <div className="ansver">
              <div id="el03" class="collapse">Hello</div>
            </div>
            <div className="questions_common__item" data-toggle="collapse" data-target="#el04">
              <a>Зачем я завел собаку?</a>
              <div className="open">
                <p>></p>
              </div>
            </div>
            <div className="ansver">
              <div id="el04" class="collapse">Hello</div>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

class Members extends React.Component {
  render() {
    return (
      <div className="members">
      <div className ="body_title">Наши выгульщики</div>
        <div className="container">
          <div className="members_common">
            <div className="members_common__item">
              <div className="member__photo">
              </div>
              <div className="member__body">
                <div className="member__body___stars">
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                </div>
                <div className="member__body___name">
                <p>Анастасия Горовая</p>
                </div>
                <div className="member__body___walk">
                <p>Количество прогулок: 107</p>
                </div>
                <div className="member__body___review">
                <p>Количество отзывов: 19</p>
                </div>
                <div className="member__body___link">
                <a href="#">Перейти в профиль</a>
                </div>
              </div>
            </div>
            <div className="members_common__item">
              <div className="member__photo">
              </div>
              <div className="member__body">
                <div className="member__body___stars">
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                </div>
                <div className="member__body___name">
                <p>Анастасия Горовая</p>
                </div>
                <div className="member__body___walk">
                <p>Количество прогулок: 107</p>
                </div>
                <div className="member__body___review">
                <p>Количество отзывов: 19</p>
                </div>
                <div className="member__body___link">
                <a href="#">Перейти в профиль</a>
                </div>
              </div>
            </div>
            <div className="members_common__item">
              <div className="member__photo">
              </div>
              <div className="member__body">
                <div className="member__body___stars">
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                  <div className="star__item">
                    <img src={require(`../images/star.png`)} />
                  </div>
                </div>
                <div className="member__body___name">
                <p>Анастасия Горовая</p>
                </div>
                <div className="member__body___walk">
                <p>Количество прогулок: 107</p>
                </div>
                <div className="member__body___review">
                <p>Количество отзывов: 19</p>
                </div>
                <div className="member__body___link">
                <a href="#">Перейти в профиль</a>
                </div>
              </div>
            </div>
          </div>
          <div className="body_button">
            <a href="#">Смотреть всех</a>
          </div>
        </div>
      </div>
    );
  }
}

class Reviews extends React.Component{
  render() {
    return (
      <div className="reviews">
       <div className="container">
       <div className="body_title">Отзывы наших клиентов</div>
        <div className="reviews_item">
          <div className="reviews_item__photo">
          <div className="reviews_item__photo___item">
          </div>
          </div>
          <div className="reviews_item__body">
            <div className="reviews_item__body___name">
              <p>Александра Павловская</p>
            </div>
            <div className="reviews_item__body___date">
            21.07.2019
            </div>
            <div className="reviews_item__body___text">
              <p>
              Мне все очень понравилось. Сотрудники были очень внимательн, буду пользоваться еще. Ваш сервис очень облегчает мне жизнь,
              теперь я могу не переживать о том, что что-то не успею, все супер, спасибо большое ребятам!
              Всем очень советую.
              </p>
            </div>
          </div>
        </div>
        <div className="reviews_item">
          <div className="reviews_item__photo">
          <div className="reviews_item__photo___item">
          </div>
          </div>
          <div className="reviews_item__body">
            <div className="reviews_item__body___name">
              <p>Дмитрий Панариин</p>
            </div>
            <div className="reviews_item__body___date">
            21.07.2019
            </div>
            <div className="reviews_item__body___text">
              <p>
              Мне все очень понравилось. Сотрудники были очень внимательн, буду пользоваться еще. Ваш сервис очень облегчает мне жизнь,
              теперь я могу не переживать о том, что что-то не успею, все супер, спасибо большое ребятам!
              Всем очень советую.
              </p>
            </div>
          </div>
        </div>
        <div className="reviews_item">
          <div className="reviews_item__photo">
          <div className="reviews_item__photo___item">
          </div>
          </div>
          <div className="reviews_item__body">
            <div className="reviews_item__body___name">
              <p>Кирилл Смольский</p>
            </div>
            <div className="reviews_item__body___date">
            21.07.2019
            </div>
            <div className="reviews_item__body___text">
              <p>
              Мне все очень понравилось. Сотрудники были очень внимательн, буду пользоваться еще. Ваш сервис очень облегчает мне жизнь,
              теперь я могу не переживать о том, что что-то не успею, все супер, спасибо большое ребятам!
              Всем очень советую.
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
    <Header /> <Banner /> <Request /> <Questions /> <Members /> <Reviews /> <Footer />
    </>,
    document.body.appendChild(document.createElement('div')),
  )
})
