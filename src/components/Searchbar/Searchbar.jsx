import { Component } from "react";
export default class Searchbar extends Component {
    state = {
        search: ""
    }
    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.search);
    }
    render() {
        return (<header className="Searchbar">
            <form onSubmit={this.handleSubmit} className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    value={this.state.search}
                    name="search"
                    onChange={this.handleChange}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>)
    }
}