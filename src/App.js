import {Simpsons} from "./components/Simpsons";
import {Ricks} from "./components/Ricks";

const App = () => {
    return (
        <div>
            <Simpsons
                name={'Homer'}
                img={'https://vinyl-market.ru/images/shop_items/1558.jpg.webp'}
            />
            <Simpsons
                name={'Marge'}
                img={'https://img2.gorod.lv/images/news_item_in_cifs/pic/96980/big/picture.jpg?v=1471351931'}
            />
            <Simpsons
                name={'Bart'}
                img={'https://cdn.leroymerlin.ru/lmru/image/upload/v1618485437/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/_2OeMy8zpUGGsq6czJrYug/90061211_01.jpg'}
            />
            <Simpsons
                name={'Lisa'}
                img={'https://crosti.ru/patterns/00/24/a3/4926f264a6/picture.jpg'}
            />
            <Simpsons
                name={'Maggie'}
                img={'https://pm1.aminoapps.com/6981/211219f3a8ff413b679a3235475632df402be90br1-1024-764v2_00.jpg'}
            />


            <Ricks
                id = {'1'}
                name = {'Rick Sanchez'}
                status = {'Alive'}
                species = {'Human'}
                gender = {'Male'}
                img = {'https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A1PA4115PT17X1Y8D170213176W24734H28450/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/rick-morty-rick-sanchez-pose-schwarz-stoffbeutel.jpg'}
            />
            <Ricks
                id = {'281'}
                name = {'Reverse Rick Outrage'}
                status = {'Alive'}
                species = {'Human'}
                gender = {'Male'}
                img = {'https://static.wikia.nocookie.net/rickandmorty/images/b/b3/Rick.PNG'}
            />
            <Ricks
                id = {'82'}
                name = {'Cronenberg Rick'}
                status = {'unknown'}
                species = {'Cronenberg'}
                gender = {'Male'}
                img = {'https://rickandmortyapi.com/api/character/avatar/82.jpeg'}
            />
            <Ricks
                id = {'288'}
                name = {'Rick D716-B'}
                status = {'Alive'}
                species = {'Human'}
                gender = {'Male'}
                img = {'https://rickandmortyapi.com/api/character/avatar/288.jpeg'}
            />
            <Ricks
                id = {'508'}
                name = {'Fascist Teddy Bear Rick’s Clone'}
                status = {'Dead'}
                species = {'Animal'}
                gender = {'Male'}
                img = {'https://rickandmortyapi.com/api/character/avatar/508.jpeg'}
            />
            <Ricks
                id = {'517'}
                name = {'Wasp Rick’s Clone'}
                status = {'unknown'}
                species = {'Animal'}
                gender = {'Male'}
                img = {'https://rickandmortyapi.com/api/character/avatar/517.jpeg'}
            />
        </div>
    );
};

export {App};