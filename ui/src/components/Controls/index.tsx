import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import { Txt2ImageParams } from '@/types'
import SelectLine from '@/components/Controls/SelectLine'

interface Props {
  params: Txt2ImageParams
  onParamsChange: (params: Txt2ImageParams) => void
}

const Controls = ({ onParamsChange, params }: Props) => {
  const onTextFieldChange =
    (fieldName: keyof Txt2ImageParams) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onParamsChange({ [fieldName]: event.target.value })
    }
  const onSliderChange =
    (fieldName: keyof Txt2ImageParams) =>
    (event: Event, value: number | number[], activeThumb: number) => {
      if (typeof value === 'number') {
        onParamsChange({ [fieldName]: value })
      }
    }

  const onSwitchButtonClick = () => {
    onParamsChange({
      width: params.height,
      height: params.width,
    })
  }

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='space-between'
      sx={{
        border: '2px solid rgba(194, 224, 255, 0.08)',
        borderRadius: 1,
        p: 4,
      }}
    >
      <Grid item container xs={5}>
        <SelectLine
          title='Width'
          max={2048}
          value={params.width}
          onTextFieldChange={onTextFieldChange('width')}
          onSliderChange={onSliderChange('width')}
        />
        <SelectLine
          title='Height'
          max={2048}
          value={params.height}
          onTextFieldChange={onTextFieldChange('height')}
          onSliderChange={onSliderChange('height')}
        />
      </Grid>
      <Grid item xs={1}>
        <Button onClick={onSwitchButtonClick}>
          <ChangeCircleIcon />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <SelectLine
          title='Steps'
          max={150}
          value={params.steps}
          onTextFieldChange={onTextFieldChange('steps')}
          onSliderChange={onSliderChange('steps')}
        />
        <SelectLine
          title='Batch size'
          max={8}
          value={params.batch_size}
          onTextFieldChange={onTextFieldChange('batch_size')}
          onSliderChange={onSliderChange('batch_size')}
        />
      </Grid>
    </Grid>
  )
}

export default Controls
