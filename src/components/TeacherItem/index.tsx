import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/29513360?s=460&u=d0eda62ed98d52f81750f3f16d2d3345278d785f&v=4" alt="Roani Pires da Silva" />
                <div>
                    <strong>Roani Pires da silva</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Viva Forevis aptent taciti sociosqu ad litora torquent. Atirei o pau no gatis, per gatis num morreus. Quem num gosta di mim que vai ca�� sua turmis!
                    <br /> <br />
                        Quem num gosta di m�, boa gentis num �. Pra l� , depois divoltis porris, paradis. Aenean aliquam molestie leo, vitae iaculis nisl. Si u mundo t� muito paradis? Toma um m� que o mundo vai girarzis!
                    </p>

            <footer>
                <p>
                    Pre�o/hora
                    <strong>R$20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;