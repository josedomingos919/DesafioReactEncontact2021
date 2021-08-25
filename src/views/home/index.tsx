import { FC, useCallback, useEffect } from "react";
import EnHeader from "../../components/header";
import EnBody from "../../components/body";
import { EnHomeProps } from "./types";
import { getDefaultTask } from "../../api";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { addListItem } from "../../storage/reducers/list/actions";

const EnHome: FC<EnHomeProps> = ({
  defaultFilter,
  list = [],
  addListItem = () => {},
}) => {
  const inicialize = useCallback(() => {
    (async () => {
      if (!list.length) {
        const data = await getDefaultTask();
        addListItem(data);
      }
    })();
  }, [list.length, addListItem]);

  useEffect(() => {
    inicialize();
  }, [inicialize]);

  return (
    <>
      <EnHeader defaultFilter={defaultFilter} />;
      <EnBody defaultFilter={defaultFilter} />
    </>
  );
};

const mapStateToProps = (store: any) => ({
  list: store.listState.list,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addListItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnHome);
