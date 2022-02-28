import React from 'react';
import axios from 'axios';
import Landing from '../landing/Landing';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(
  function (options) {
    options.headers.authorization = localStorage.getItem('token');
    return options;
  },
  function (error) {
    return Promise.reject(error)
  }
);

export default function axiosWithAuth (Component) {
    return class Authenticate extends React.Component {
        render() {
            const token = localStorage.getItem('token')
            return (
                <>
                    {
                        token ? <Component { ...this.props } /> : <Landing />
                    }
                </>
            )
        }
    }
}

