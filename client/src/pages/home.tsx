import Logo from "../components/logo";
import Layout from "../layouts/layout";
import Input from "../components/input";
import Label from "../components/label";
import { useState } from "react";
import InputChange from "../interfaces/inputChange";

/**
 * Represents the home page component.
 */
export default function Home() {
  const [url, setUrl] = useState<string>("");

  const handleUrlChange: InputChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Layout className="gap-[3rem]">
      <Logo />
      <div className="flex flex-row w-full items-start gap-2">
        <Logo className="size-8" />
        <h1 className="self-center font-semibold">MOPI - Music Downloader</h1>
      </div>

      <div>
        <Label htmlFor="url" value="Video link" />
        <Input
          name="url"
          placeholder="Paste YouTube link here"
          value={url}
          onChange={handleUrlChange}
        ></Input>
      </div>
    </Layout>
  );
}
