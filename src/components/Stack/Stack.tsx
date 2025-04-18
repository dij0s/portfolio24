import {
  PythonOriginal,
  ScalaOriginal,
  JuliaOriginal,
  TensorflowOriginal,
  ScikitlearnOriginal,
  RedisOriginal,
  ApachesparkOriginal,
  KubernetesOriginal,
} from "devicons-react";

import "./Stack.css";

const stackData = [
  {
    name: "Python",
    icon: PythonOriginal,
  },
  {
    name: "Scala",
    icon: ScalaOriginal,
  },
  {
    name: "Julia",
    icon: JuliaOriginal,
  },
  {
    name: "Kubernetes",
    icon: KubernetesOriginal,
  },
  {
    name: "Tensorflow",
    icon: TensorflowOriginal,
  },
  {
    name: "Scikit-learn",
    icon: ScikitlearnOriginal,
  },
  {
    name: "Redis",
    icon: RedisOriginal,
  },
  {
    name: "Apache Spark",
    icon: ApachesparkOriginal,
  },
];

function Stack() {
  return (
    <div id="stack-wrapper">
      <div id="stack-kit-wrapper">
        <div>
          <span>Experience in hand.</span>
          <span>A glimpse into my playbook for success.</span>
        </div>
        <div id="stack-kit">
          {stackData.map((stack, stackIndex) => (
            <div key={stackIndex} className="stack-tech">
              <stack.icon />
              <h5>{stack.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
