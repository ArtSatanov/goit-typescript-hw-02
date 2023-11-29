/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface NoteBook {
  title: string;
}

class Component <T>{
  constructor(public props: T) {
    

  }
}

class Page extends Component <NoteBook>{
  pageInfo (): void {
    console.log(this.props.title);
  }
}

export {};