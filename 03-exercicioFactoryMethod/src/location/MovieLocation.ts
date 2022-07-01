import IItem from "./itens/interfaces/IItem";
import { Location } from "./Location";
import Movie from "./itens/Movie";

export default class MovieLocation extends Location{
    protected createItem() : IItem {
        return new Movie();
    }
}