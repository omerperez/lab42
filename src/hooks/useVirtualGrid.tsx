import {
  LAYOUT_HEADER_SIZE,
  LAYOUT_PADDING_SIZE,
  SIDEBAR_WIDTH,
} from "@/constants";
import { useMemo } from "react";
import {
  GridOnItemsRenderedProps,
  ListOnItemsRenderedProps,
} from "react-window";
import { useWindowSize } from "./useWindowSize";

interface VirtualGridResults {
  gridColumnCount: number;
  virtualGridWidth: number;
  virtualGridHeight: number;
  transformGridItemsRenderedPropsToList: (
    transformGridItemsRenderedPropsToList: GridOnItemsRenderedProps,
    total: number,
  ) => ListOnItemsRenderedProps;
}

export const useVirtualGrid = (): VirtualGridResults => {
  const { height, width } = useWindowSize();

  const virtualGridWidth = width - LAYOUT_PADDING_SIZE - SIDEBAR_WIDTH;
  const gridColumnCount = useMemo(() => {
    if (virtualGridWidth < 850) return 1;
    if (virtualGridWidth < 1300) return 2;
    return 3;
  }, [virtualGridWidth]);

  const transformGridIndex = (index: number) => index * gridColumnCount;

  const transformGridItemsRenderedPropsToList = (
    {
      visibleRowStartIndex,
      visibleRowStopIndex,
      overscanRowStopIndex,
      overscanRowStartIndex,
    }: GridOnItemsRenderedProps,
    total: number,
  ) => ({
    overscanStartIndex: transformGridIndex(overscanRowStartIndex),
    overscanStopIndex: Math.min(
      transformGridIndex(overscanRowStopIndex),
      total,
    ),
    visibleStartIndex: transformGridIndex(visibleRowStartIndex),
    visibleStopIndex: Math.min(transformGridIndex(visibleRowStopIndex), total),
  });

  const virtualGridHeight = height - LAYOUT_HEADER_SIZE;

  return {
    virtualGridWidth,
    gridColumnCount,
    virtualGridHeight,
    transformGridItemsRenderedPropsToList,
  };
};
