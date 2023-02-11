import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import Typography from '@mui/material/Typography';
import { sentenceCase } from "change-case";

const LISTBOX_PADDING = 8;

function renderRow(props: ListChildComponentProps) {
    const { data, index, style } = props;
    const dataSet = data[ index ];
    const inlineStyle = {
        ...style,
        top: (style.top as number) + LISTBOX_PADDING,
    };

    const hasGroup = Object.prototype.hasOwnProperty.call(dataSet, "group");
    if (hasGroup) {
        return (
            <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
                {dataSet.group}
            </ListSubheader>
        );
    }

    return (
        <Typography component="li" {...dataSet[ 0 ]} noWrap style={inlineStyle}>
            {`${sentenceCase(dataSet[ 1 ])}`}
        </Typography>
    );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});

OuterElementType.displayName = 'OuterElementType';

function useResetCache(data: any) {
    const ref = React.useRef<VariableSizeList>(null);
    React.useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [ data ]);
    return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {

    const { children, ...other } = props;
    const itemData: React.ReactChild[] = [];
    (children as React.ReactChild[]).forEach(
        (item: React.ReactChild & { children?: React.ReactChild[] }) => {
            itemData.push(item);
            itemData.push(...(item.children || []));
        },
    );

    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: React.ReactChild) => {

        // const hasGroup = child.hasOwnProperty('group');
        const hasGroup = Object.prototype.hasOwnProperty.call(child, "group");
        if (hasGroup) {
            return 48;
        }

        return itemSize;
    };

    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <VariableSizeList
                    itemData={itemData}
                    height={getHeight() + 2 * LISTBOX_PADDING}
                    width="100%"
                    ref={gridRef}
                    outerElementType={OuterElementType}
                    innerElementType="ul"
                    itemSize={(index) => getChildSize(itemData[ index ])}
                    overscanCount={5}
                    itemCount={itemCount}
                >
                    {renderRow}
                </VariableSizeList>
            </OuterElementContext.Provider>
        </div>
    );
});

const StyledPopper = styled(Popper)({
    [ `& .${autocompleteClasses.listbox}` ]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
});

type VirtualizeProps = {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

export default function Virtualize(cProps: VirtualizeProps) {

    const { label, options, value, onChange } = cProps;

    return (
        <Autocomplete
            id="virtualize-demo"
            disableListWrap
            autoHighlight
            fullWidth
            multiple={false}
            sx={{ width: '100%' }}
            PopperComponent={StyledPopper}
            ListboxComponent={ListboxComponent}
            defaultValue={value}
            options={options}
            groupBy={(option) => option[ 0 ].toUpperCase()}
            renderInput={(params) => <TextField {...params} label={label} />}
            renderOption={(props, option, state) =>
                [ props, option, state.index ] as React.ReactNode
            }
            onChange={(event: any, opt: any) => {
                onChange(opt);
            }}
            // TODO: Post React 18 update - validate this conversion, look like a hidden bug
            renderGroup={(params) => params as unknown as React.ReactNode}
        />
    );
}