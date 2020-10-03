import React from 'react';
import TitleSection from './TitleSection';
import Section from './section';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  
  render() {
      console.log(this.props)
    return (
        <main>
            {this.props.charactors.map(charactor =>
                <article key={charactor.id}>
                    <div>
                        <img src={charactor.image} alt=""/>
                    </div>
                    <div>
                        <TitleSection name={charactor.name} url={charactor.url} status={charactor.status} species={charactor.species}/>
                        <Section url={charactor.location.url} location={charactor.location.name}/>
                        <Section url={charactor.origin.url} location={charactor.origin.name}/>
                    </div>
                </article>
            )}
        </main>
    )
  }
}
export default Main;