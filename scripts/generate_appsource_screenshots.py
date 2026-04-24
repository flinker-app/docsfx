#!/usr/bin/env python
from __future__ import print_function

import argparse
import os

from PIL import Image, ImageDraw, ImageFont, ImageOps

CANVAS_WIDTH = 1366
CANVAS_HEIGHT = 768
BACKGROUND_COLOR = (0, 120, 212)
TITLE_COLOR = (255, 255, 255)
TITLE_CENTER_Y = 92
TITLE_START_SIZE = 52

CARD_WIDTH = 1080
CARD_HEIGHT = 608
CARD_X = (CANVAS_WIDTH - CARD_WIDTH) // 2
CARD_OVERFLOW_BOTTOM = 20
CARD_Y = CANVAS_HEIGHT - CARD_HEIGHT + CARD_OVERFLOW_BOTTOM
CARD_RADIUS = 4
CARD_BORDER_COLOR = (220, 220, 220)

DEFAULT_ITEMS = [
    ("apply-colors-and-filter-in-teams-ifc-viewer.png", "Apply Colors and Filters"),
    ("load-multiple-ifc-files-in-teams-ifc-viewer.png", "Load Multiple IFC Files"),
    ("set-default-view-in-teams-ifc-viewer.png", "Set Default View"),
    ("show-bcf-conflict-in-teams-ifc-viewer.png", "Show BCF Conflict"),
    ("teams-apps-ifc-viewer-tab-settings-paste-ifc-file-links-and-save.png", "Connect IFC Files by Link"),
]

# User requested to skip the "share a bcf" screenshot.
EXCLUDED_FILES = {"share-a-bcf-topic-with-teams-ifc-viewer.png"}


def _resample_filter():
    if hasattr(Image, "Resampling"):
        return Image.Resampling.LANCZOS
    return Image.LANCZOS


def _font_candidates():
    return [
        r"C:\Windows\Fonts\segoeuib.ttf",
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\calibrib.ttf",
    ]


def load_font(size):
    for path in _font_candidates():
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size=size)
            except Exception:
                pass
    return ImageFont.load_default()


def text_size(draw, text, font):
    if hasattr(draw, "textbbox"):
        left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
        return right - left, bottom - top
    return draw.textsize(text, font=font)


def fit_title_font(draw, text, max_width=1200, start_size=TITLE_START_SIZE, min_size=20):
    size = start_size
    while size >= min_size:
        font = load_font(size)
        width, _ = text_size(draw, text, font)
        if width <= max_width:
            return font
        size -= 2
    return load_font(min_size)


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    if hasattr(draw, "rounded_rectangle"):
        draw.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    else:
        draw.rectangle((0, 0, size[0] - 1, size[1] - 1), fill=255)
    return mask


def render_image(source_path, title, output_path):
    canvas = Image.new("RGB", (CANVAS_WIDTH, CANVAS_HEIGHT), BACKGROUND_COLOR)
    draw = ImageDraw.Draw(canvas)

    font = fit_title_font(draw, title)
    title_width, title_height = text_size(draw, title, font)
    title_x = (CANVAS_WIDTH - title_width) // 2
    title_y = TITLE_CENTER_Y - (title_height // 2)
    draw.text((title_x, title_y), title, fill=TITLE_COLOR, font=font)

    image = Image.open(source_path).convert("RGB")
    fitted = ImageOps.fit(
        image,
        (CARD_WIDTH, CARD_HEIGHT),
        method=_resample_filter(),
        centering=(0.5, 0.5),
    )

    mask = rounded_mask((CARD_WIDTH, CARD_HEIGHT), CARD_RADIUS)
    canvas.paste(fitted, (CARD_X, CARD_Y), mask=mask)

    if hasattr(draw, "rounded_rectangle"):
        draw.rounded_rectangle(
            (CARD_X, CARD_Y, CARD_X + CARD_WIDTH - 1, CARD_Y + CARD_HEIGHT - 1),
            radius=CARD_RADIUS,
            outline=CARD_BORDER_COLOR,
            width=1,
        )

    canvas.save(output_path, format="PNG")


def output_name(source_name):
    stem, _ = os.path.splitext(os.path.basename(source_name))
    return "appsource-{0}.png".format(stem)


def parse_args():
    parser = argparse.ArgumentParser(
        description="Generate AppSource screenshots (1366x768) with a blue title header."
    )
    parser.add_argument(
        "--media-dir",
        default="_media",
        help="Directory containing source images (default: _media).",
    )
    parser.add_argument(
        "--output-dir",
        default=os.path.join("_media", "appsource"),
        help="Directory where screenshots will be written (default: _media/appsource).",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    media_dir = os.path.abspath(args.media_dir)
    output_dir = os.path.abspath(args.output_dir)

    if not os.path.isdir(media_dir):
        raise SystemExit("Media directory not found: {0}".format(media_dir))

    if not os.path.isdir(output_dir):
        os.makedirs(output_dir)

    generated = []
    for source_name, title in DEFAULT_ITEMS:
        if source_name in EXCLUDED_FILES:
            continue

        source_path = os.path.join(media_dir, source_name)
        if not os.path.exists(source_path):
            print("Skip (missing): {0}".format(source_path))
            continue

        out_path = os.path.join(output_dir, output_name(source_name))
        render_image(source_path, title, out_path)
        generated.append(out_path)
        print("Created: {0}".format(out_path))

    if not generated:
        raise SystemExit("No screenshots were generated.")

    print("Done. Generated {0} screenshot(s).".format(len(generated)))


if __name__ == "__main__":
    main()
