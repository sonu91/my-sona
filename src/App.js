import React from 'react';
import DataGrid from 'react-data-grid';
const columns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Name' },
  { key: 'customer', name: 'Customer' },
  { key: 'productGroup', name: 'ProductGroup' },
  { key: 'status', name: 'Status' },
  { key: 'locationSE', name: 'Location SE' },
  { key: 'locationTE', name: 'Location TE' }
];



/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('http://10.215.241.161:8087/api/project') /* http://10.215.241.161:81/angapp/     http://10.215.241.161:8087/api/project*/
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading Trek Project Details...Please wait</div>;

        return (
            <div className="App">
                        <DataGrid                      
                        columns={columns}
                        rows={items}  />
              </div>
        );

    }

}
export default App;