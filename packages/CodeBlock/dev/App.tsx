import CodeBlock from '../src';
import { htmlCode, jsonCode, reactCode, yamlCode } from './mock';

export default function Demo() {
  return (
    <div className="sa-grid sa-grid-cols-2">
      <div className="sa-flex sa-flex-col sa-gap-2 sa-p-2">
        <div className="sa-bg-slate-100 sa-p-2 sa-text-center sa-rounded">
          Dark Mode
        </div>
        <div className="sa-h-[90vh]">
          <div className="sa-p-2">
            <div className="sa-text-base sa-py-1">React</div>
            <CodeBlock
              theme="dark"
              language="typescript"
              code={reactCode}
              fileName="index.tsx"
            ></CodeBlock>
          </div>
          <div className="sa-p-2">
            <div className="sa-text-base sa-py-1">Html</div>
            <CodeBlock
              theme="dark"
              language="html"
              code={htmlCode}
              fileName="index.html"
            ></CodeBlock>
          </div>
          <div className="sa-p-2">
            <div className="sa-text-base sa-py-1">Json</div>
            <CodeBlock theme="dark" language="json" code={jsonCode}></CodeBlock>
          </div>
          <div className="sa-p-2">
            <div className="sa-text-base sa-py-1">Yaml</div>
            <CodeBlock theme="dark" language="yaml" code={yamlCode}></CodeBlock>
          </div>
        </div>
      </div>
      <div className="sa-flex sa-flex-col sa-gap-2 sa-p-2">
        <div className="sa-bg-slate-100 sa-p-2 sa-text-center sa-rounded">
          Light Mode
        </div>
        <div className="sa-h-[90vh]">
          <div className="sa-p-2">
            <div className="sa-text-base sa-py-1">React</div>
            <CodeBlock
              theme="light"
              language="typescript"
              fileName="index.tsx"
              code={reactCode}
            ></CodeBlock>
          </div>
          <div className="sa-p-2">
            <div className="sa-text-base sa-py-1">Html</div>
            <CodeBlock
              theme="light"
              language="html"
              code={htmlCode}
              fileName="index.html"
            ></CodeBlock>
          </div>
          <div className="sa-p-2">
            <div className="sa-text-base sa-py-1">Json</div>
            <CodeBlock
              theme="light"
              language="json"
              code={jsonCode}
              fileName="index.json"
            ></CodeBlock>
          </div>
          <div className="sa-p-2">
            <div className="sa-text-base sa-py-1">Yaml</div>
            <CodeBlock
              theme="light"
              language="yaml"
              code={yamlCode}
            ></CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
