/** @format */

import {Button, Card} from 'antd'
import React from 'react'
import imageUrl from '../public/assets/a.png'

const Apps = (): React.ReactElement => {
  return (
    <div>
      <p className="text-yellow-500">Apps content</p>
      <img src={imageUrl} alt="" />
      <Button>++++</Button>
      <Card>hello</Card>
    </div>
  )
}

export default Apps
