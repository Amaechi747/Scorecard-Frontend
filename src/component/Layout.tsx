


function Layout(props:any): JSX.Element {

    return (
      <div className="App">

        <nav></nav>
        <div></div>
        <div>{props.children}</div>
      </div>
    );
  }

  export default Layout;