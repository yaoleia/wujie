import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <Radio.Group>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Button type="primary">
        Primary
      </Button>
      <Button>Default</Button>
      <Button type="dashed">
        Dashed
      </Button>
      <br />
      <Button type="link">
        Link
      </Button>
      <br />
      <Button type="primary" icon={<DownloadOutlined />} />
      <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
      <Button type="primary" shape="round" icon={<DownloadOutlined />} />
      <Button type="primary" shape="round" icon={<DownloadOutlined />}>
        Download
      </Button>
      <Button type="primary" icon={<DownloadOutlined />}>
        Download
      </Button>
    </div>
  );
}

export default App;
