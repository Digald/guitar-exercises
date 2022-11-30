type KeySelectProps = { setKey: (value: string) => void; scaleType: string };

type KeySelectInputs = {
  key: string;
};

interface ScaleProps {
  scaleKey: string;
  scaleType: string;
}

type VexState = any;

type ScaleTypeProps = { setScaleType: (value: string) => void };

type ScaleTypeInputs = {
  scaleType: string;
};

enum exerciseType1 {
  asc = 'asc',
  desc = 'desc',
}