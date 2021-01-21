import React from 'react'
import { Empty, Button } from 'antd'

export const NotFound = () => {
  return (
    <div style={{ alignSelf: 'center', alignItems: 'center' }}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <>
            <span>There are currently no policies available to vote.</span>
            <br />
            <span>You can look for a under discussion or consideration, or you can propose one.</span>
          </>
        }
      />
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dev-protocol/DIPs/issues"
          type="primary"
        >
          Access DIPs
        </Button>
      </div>
    </div>
  )
}
