import React, { Component } from 'react'
import dynamic from "next/dynamic";

const QrReader = dynamic(() => import('react-qr-reader'),{ ssr: false })

class QrReaderPage extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="container">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>

        <style jsx>{`
          .container {
            width: 50%;
            heigth: 100%;
            margin: auto;
            margin-top: 100px;
          }
        `}</style>
      </div>
    )
  }
}

export default QrReaderPage;