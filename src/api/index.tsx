import { useEffect } from "react";
import { useLoading } from "../components/loading/context";

const { setLoading } = useLoading();

useEffect(() => {
  setLoading(true);
}, []);
