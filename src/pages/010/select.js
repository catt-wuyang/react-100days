import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Select = React.memo(
  function (props) {
    const {
      prefixCls,
      name,
      disabled,
      options,
      defaultValue,
      placeholder,
      onChange,
    } = props;

    const [isShowOption, setIsShowOption] = useState(false);
    const [selected, setSelected] = useState(null);

    console.log(`${name} select rendered`, selected);

    useEffect(() => {
      if (defaultValue) {
        const selectedData = options.find((item) => item.value == defaultValue);
        setSelected(selectedData);
      }
    }, []);

    useEffect(() => {
      document.addEventListener("click", (e) => {
        setIsShowOption(false);
      });
    });

    function onToggleMenu(e) {
      if (disabled) return;
      e.nativeEvent.stopImmediatePropagation();
      const isShow = !isShowOption;
      setIsShowOption(isShow);
    }

    function onSelectMenu(e) {
      const selectedValue = e.target.dataset.value;
      const selectedData = options.find((item) => item.value == selectedValue);
      onChange && onChange(selectedValue);
      setIsShowOption(false);
      setSelected(selectedData);
    }

    const menuCls = classnames("select-menu", {
      show: isShowOption,
    });

    const compCls = classnames(`${prefixCls}-select`, "select-wrapper");
    const displayCls = classnames("select-display", {
      disabled: disabled,
    });

    return (
      <div className={compCls}>
        <div className={displayCls}>
          <div className="select-item" onClick={onToggleMenu}>
            <div className="select-name">
              <span>{selected ? selected["text"] : placeholder}</span>
            </div>
          </div>
        </div>

        <ul className={menuCls}>
          {options.map((item, index) => {
            if (item) {
              const selectedItemCls = classnames({
                active: selected && item.value == selected["value"],
              });
              return (
                <li
                  className={selectedItemCls}
                  key={`select_item_${index}`}
                  data-value={item.value}
                  onClick={onSelectMenu}
                >
                  {item.text}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.options === nextProps.options;
  }
);

Select.displayName = "Select";

Select.propTypes = {
  prefixCls: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  prefixCls: "rc",
  name: "rc-select",
  placeholder: "请选择",
  disabled: false,
  options: [],
};

export default Select;
